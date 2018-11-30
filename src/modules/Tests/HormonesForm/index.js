import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

import * as S from './styled';

const Indicators = {
  wheyIron: {
    value: '',
    info: '',
    unit: 'мкмоль/л',
    error: '',
    flag: 'unit',
    label: 'Железо сыворочное',
    limits: {
      man: {
        maxLimit: 28.6,
        minLimit: 10.7,
      },
      woman: {
        maxLimit: 25.9,
        minLimit: 7.2,
      },
    },
  },
  ferritin: {
    value: '',
    info: '',
    unit: 'мкг/л',
    error: '',
    flag: 'unit',
    label: 'Ферритин',
    limits: {
      man: {
        maxLimit: 250,
        minLimit: 20,
      },
      woman: {
        maxLimit: 120,
        minLimit: 10,
      },
    },
  },
  tsh: {
    value: '',
    info: '',
    unit: 'мЕд/л',
    error: '',
    flag: 'unit',
    label: 'Тиреотропный гормон',
    limits: {
      man: {
        maxLimit: 4,
        minLimit: 0.4,
      },
      woman: {
        maxLimit: 4,
        minLimit: 0.4,
      },
    },
  },
  cortisol: {
    value: '',
    info: '',
    unit: 'нмоль/л',
    error: '',
    flag: 'unit',
    label: 'Кортизол',
    limits: {
      man: {
        maxLimit: 635,
        minLimit: 138,
      },
      woman: {
        maxLimit: 635,
        minLimit: 138,
      },
    },
  },
  prolactinum: {
    value: '',
    info: '',
    unit: 'мЕд/л',
    flag: 'unit',
    label: 'Пролактин',
    limits: {
      man: {
        maxLimit: 407,
        minLimit: 73,
      },
      woman: {
        maxLimit: 557,
        minLimit: 109,
      },
    },
  },
};

class HormonesForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = () => ({ title: 'Гормоны' });

  state = { indicators: { ...Indicators }, sex: 'man' }

  handleChange = (key, value) => {
    const { indicators } = this.state;
    const elem = indicators[key];

    // if (elem.flag === 'error' || elem.flag === 'info') {
    //   return this.setState(({ indicators }) => ({
    //     indicators: {
    //       ...indicators,
    //       [key]: {
    //         ...elem,
    //         flag: 'unit',
    //         error: '',
    //         value,
    //       },
    //     },
    //   }));
    // }

    this.setState(
      ({ indicators }) => ({
        indicators: {
          ...indicators,
          [key]: { ...elem, value },
        },
      }),
    );
  }

  showEmptyStringError = el => this.setState(({ indicators }) => ({
    indicators: {
      ...indicators,
      [el]: {
        ...indicators[el],
        flag: true,
        error: 'Пустая строка',
      },
    },
  }))

  showInfo = (el, data) => this.setState(({ indicators }) => ({
    indicators: {
      ...indicators,
      [el]: {
        ...indicators[el],
        ...data,
      },
    },
  }))

  handleClick = () => {
    const { indicators, sex } = this.state;

    Object.keys(indicators).forEach((el) => {
      const { limits } = indicators[el];
      const elem = indicators[el];
      const { value } = elem;

      if (!value) {
        return this.showInfo(el, { flag: 'error', error: 'Пустая строка' });
      }

      if (Number.isNaN(parseInt(value, 10))) {
        return this.showInfo(el, { flag: 'error', error: 'Недопустимый формат' });
      }

      if (value > limits[sex].maxLimit) {
        return this.showInfo(el, { flag: 'info', info: 'Превшена норма' });
      }

      if (value < limits[sex].minLimit) {
        return this.showInfo(el, { flag: 'info', info: 'Значение ниже нормы' });
      }

      return this.showInfo(el, { flag: 'info', info: 'Норма' });
    });
  }

  getInfoByFlag = (flag, info, error, unit) => {
    switch (flag) {
      case 'info':
        return info;
      case 'error':
        return error;
      case 'unit':
        return unit;
      default:
        return unit;
    }
  }

  render() {
    const { sex, indicators } = this.state;

    return (
      <S.Wrapper>
        <S.Container>
          {
            Object.keys(indicators).map((el) => {
              const { indicators } = this.state;
              const { unit, value, error, flag, label, info } = indicators[el];

              return (
                <S.InputWrapper key={el}>
                  <S.Input
                    label={label}
                    value={value}
                    error={error && error}
                    onChangeText={text => this.handleChange(`${el}`, text)}
                  />
                  <S.UnitText
                    type={flag === 'unit' || flag === 'info' ? 'info' : 'error'}
                    visible="true"
                  >
                    {this.getInfoByFlag(flag, info, error, unit)}
                  </S.UnitText>
                </S.InputWrapper>
              );
            })
          }
          <S.RadioBtn.Group
            onValueChange={value => this.setState({ sex: value })}
            value={sex}
          >
            <View>
              <Text>Муж-ой</Text>
              <S.RadioBtn
                color="#6200ee"
                value="man"
              />
            </View>
            <View>
              <Text>Жен-ий</Text>
              <S.RadioBtn
                color="#6200ee"
                value="woman"
              />
            </View>
          </S.RadioBtn.Group>
          <S.SButton
            icon="search"
            mode="contained"
            onPress={this.handleClick}
          >
            Проверить
          </S.SButton>
        </S.Container>
      </S.Wrapper>
    );
  }
}

export default HormonesForm;
