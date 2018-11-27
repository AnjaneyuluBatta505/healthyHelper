import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

import * as S from './styled';

const Indicators = {
  glucose: {
    value: '',
    info: '',
    unit: 'ммоль/л',
    error: '',
    flag: 'unit',
    label: 'Глюкоза',
    limits: {
      man: {
        maxLimit: 5.3,
        minLimit: 3.5,
      },
      woman: {
        maxLimit: 5.3,
        minLimit: 3.5,
      },
    },
  },
  hemoglobin: {
    value: '',
    info: '',
    unit: 'g/dL',
    error: '',
    flag: 'unit',
    label: 'Конц. гемоглобина',
    limits: {
      man: {
        maxLimit: 17.5,
        minLimit: 13,
      },
      woman: {
        maxLimit: 15.7,
        minLimit: 12,
      },
    },
  },
  leukocytes: {
    value: '',
    info: '',
    unit: '*10^3/μL',
    error: '',
    flag: 'unit',
    label: 'Конц. лейкоцитов',
    limits: {
      man: {
        maxLimit: 9,
        minLimit: 4,
      },
      woman: {
        maxLimit: 9,
        minLimit: 4,
      },
    },
  },
  erythrocytes: {
    value: '',
    info: '',
    unit: '*10^3/μL',
    error: '',
    flag: 'unit',
    label: 'Кол-во эритроцитов',
    limits: {
      man: {
        maxLimit: 6.08,
        minLimit: 4.9,
      },
      woman: {
        maxLimit: 5.1,
        minLimit: 3.7,
      },
    },
  },
  hematocrit: {
    value: '',
    info: '',
    unit: '%',
    flag: 'unit',
    label: 'Гематокрит',
    limits: {
      man: {
        maxLimit: 50,
        minLimit: 39,
      },
      woman: {
        maxLimit: 47,
        minLimit: 35,
      },
    },
  },
  numbPlatelets: {
    value: '',
    info: '',
    unit: '*10^3/μL',
    error: '',
    flag: 'unit',
    label: 'Кол-во тромбоцитов',
    limits: {
      man: {
        maxLimit: 400,
        minLimit: 150,
      },
      woman: {
        maxLimit: 400,
        minLimit: 150,
      },
    },
  },
  esr: {
    value: '',
    info: '',
    unit: 'мм/час',
    error: '',
    flag: 'unit',
    label: 'СОЭ',
    limits: {
      man: {
        maxLimit: 15,
        minLimit: 2,
      },
      woman: {
        maxLimit: 20,
        minLimit: 2,
      },
    },
  },
};

class BloodForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
    // indicators: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = () => ({ title: 'Анализ Крови' });

  state = { indicators: { ...Indicators }, sex: 'man' }

  handleChange = (key, value) => {
    const { indicators } = this.state;
    const elem = indicators[key];

    if (elem.flag === 'error' || elem.flag === 'info') {
      return this.setState(({ indicators }) => ({
        indicators: {
          ...indicators,
          [key]: {
            ...elem,
            flag: 'unit',
            error: '',
            value,
          },
        },
      }));
    }

    return this.setState(
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

      if (value < limits[sex].maxLimit) {
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

export default BloodForm;
