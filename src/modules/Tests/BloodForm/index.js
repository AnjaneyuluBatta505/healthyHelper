import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import update from 'immutability-helper';

import * as S from './styled';

const Indicators = [
  {
    id: 'glucose',
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
  {
    id: 'hemoglobin',
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
  {
    id: 'leukocytes',
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
  {
    id: 'erythrocytes',
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
  {
    id: 'hematocrit',
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
  {
    id: 'numbPlatelets',
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
  {
    id: 'esr',
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
];

class BloodForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = () => ({ title: 'Анализ Крови' });

  state = { indicators: [...Indicators], sex: 'man' }

  handleChange = (value, indx) => {
    const { indicators } = this.state;
    const elem = indicators[indx];

    if (elem.flag === 'error' || elem.flag === 'info') {
      return this.setState(({ indicators }) => ({
        indicators: update(indicators, { [indx]: {
          value: { $set: value },
          flag: { $set: 'unit' },
          error: { $set: '' } },
        }),
      }));
    }

    return this.setState(({ indicators }) => ({
      indicators: update(indicators, { [indx]: { value: { $set: value } } }),
    }));
  }

  showInfo = (indx, { flag, error = '', info = '' }) => this.setState(({ indicators }) => ({
    indicators: update(indicators, { [indx]: {
      flag: { $set: flag },
      error: { $set: error },
      info: { $set: info },
    } }),
  }))

  handleClick = () => {
    const { indicators, sex } = this.state;

    indicators.forEach((el, i) => {
      const { limits, value } = el;

      if (!value) {
        return this.showInfo(i, { flag: 'error', error: 'Пустая строка' });
      }

      if (Number.isNaN(parseInt(value, 10))) {
        return this.showInfo(i, { flag: 'error', error: 'Недопустимый формат' });
      }

      if (value > limits[sex].maxLimit) {
        return this.showInfo(i, { flag: 'info', info: 'Превышена норма' });
      }

      if (value < limits[sex].minLimit) {
        return this.showInfo(i, { flag: 'info', info: 'Значение ниже нормы' });
      }

      return this.showInfo(i, { flag: 'info', info: 'Норма' });
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
            indicators.map((el, indx) => {
              const { unit, value, error, flag, label, info, id } = el;

              return (
                <S.InputWrapper key={id}>
                  <S.Input
                    label={label}
                    value={value}
                    error={error && error}
                    onChangeText={text => this.handleChange(text, indx)}
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
