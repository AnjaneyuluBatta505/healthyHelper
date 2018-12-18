import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import update from 'immutability-helper';
import { Text } from 'react-native-paper';

import Dialog from './Dialog';
import * as S from './styled';

const Indicators = [
  {
    id: 'mcv',
    value: '',
    info: '',
    unit: 'фл',
    error: '',
    flag: 'unit',
    label: '(MCV) Средн. об-ем эритроцита',
    limits: {
      man: {
        maxLimit: 87,
        minLimit: 78,
      },
      woman: {
        maxLimit: 87,
        minLimit: 78,
      },
    },
  },
  {
    id: 'hemoglobin',
    value: '',
    info: '',
    unit: 'г/л',
    error: '',
    flag: 'unit',
    label: '(Hb) Гемоглобин',
    limits: {
      man: {
        maxLimit: 160,
        minLimit: 130,
      },
      woman: {
        maxLimit: 145,
        minLimit: 115,
      },
    },
  },
  {
    id: 'WBC',
    value: '',
    info: '',
    unit: '*10^9/л',
    error: '',
    flag: 'unit',
    label: '(WBC) Лейкоциты',
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
    unit: '*10^12/л',
    error: '',
    flag: 'unit',
    label: '(RBC) Эритроциты',
    limits: {
      man: {
        maxLimit: 5.1,
        minLimit: 4.0,
      },
      woman: {
        maxLimit: 4.7,
        minLimit: 3.7,
      },
    },
  },
  {
    id: 'hematocrit',
    value: '',
    info: '',
    unit: '',
    flag: 'unit',
    label: '(HTC) Гематокрит ',
    limits: {
      man: {
        maxLimit: 0.53,
        minLimit: 0.41,
      },
      woman: {
        maxLimit: 0.46,
        minLimit: 0.36,
      },
    },
  },
  {
    id: 'mch',
    value: '',
    info: '',
    unit: 'пг',
    error: '',
    flag: 'unit',
    label: '(MCH) Средн. содерж. гемонл в эритр.',
    limits: {
      man: {
        maxLimit: 34,
        minLimit: 27,
      },
      woman: {
        maxLimit: 34,
        minLimit: 27,
      },
    },
  },
  {
    id: 'mchc',
    value: '',
    info: '',
    unit: 'г/дл',
    error: '',
    flag: 'unit',
    label: '(MCHC) Средн. конц. гемонл в эритр.',
    limits: {
      man: {
        maxLimit: 37,
        minLimit: 32,
      },
      woman: {
        maxLimit: 37,
        minLimit: 32,
      },
    },
  },
  {
    id: 'rdw',
    value: '',
    info: '',
    unit: '%',
    error: '',
    flag: 'unit',
    label: '(RDW) Анизацитоз эритроцитов',
    limits: {
      man: {
        maxLimit: 14.5,
        minLimit: 11.5,
      },
      woman: {
        maxLimit: 14.5,
        minLimit: 11.5,
      },
    },
  },
  {
    id: 'reticulocytes',
    value: '',
    info: '',
    unit: '%',
    error: '',
    flag: 'unit',
    label: 'Ретикулоциты',
    limits: {
      man: {
        maxLimit: 1.7,
        minLimit: 0.24,
      },
      woman: {
        maxLimit: 2.05,
        minLimit: 0.12,
      },
    },
  },
  {
    id: 'platelets',
    value: '',
    info: '',
    unit: '%',
    error: '',
    flag: 'unit',
    label: 'Тромбоциты',
    limits: {
      man: {
        maxLimit: 320,
        minLimit: 180,
      },
      woman: {
        maxLimit: 320,
        minLimit: 180,
      },
    },
  },
  {
    id: 'basophils_relarive',
    value: '',
    info: '',
    unit: '%',
    error: '',
    flag: 'unit',
    label: 'Базофилы',
    limits: {
      man: {
        maxLimit: 1,
        minLimit: 0,
      },
      woman: {
        maxLimit: 1,
        minLimit: 0,
      },
    },
  },
  {
    id: 'basophils_absolute',
    value: '',
    info: '',
    unit: '10^9/л',
    error: '',
    flag: 'unit',
    label: 'Базофилы',
    limits: {
      man: {
        maxLimit: 0.09,
        minLimit: 0,
      },
      woman: {
        maxLimit: 0.09,
        minLimit: 0,
      },
    },
  },
  {
    id: 'eosinophils_relative',
    value: '',
    info: '',
    unit: '%',
    error: '',
    flag: 'unit',
    label: 'Эозинофилы',
    limits: {
      man: {
        maxLimit: 5,
        minLimit: 0.5,
      },
      woman: {
        maxLimit: 5,
        minLimit: 0.5,
      },
    },
  },
  {
    id: 'eosinophils_absolute',
    value: '',
    info: '',
    unit: '10^9/л',
    error: '',
    flag: 'unit',
    label: 'Эозинофилы',
    limits: {
      man: {
        maxLimit: 0.35,
        minLimit: 0.04,
      },
      woman: {
        maxLimit: 0.35,
        minLimit: 0.04,
      },
    },
  },
  {
    id: 'neutrophils_stick-core',
    value: '',
    info: '',
    unit: '%',
    error: '',
    flag: 'unit',
    label: 'Нейтрофилы палочкоядерные',
    limits: {
      man: {
        maxLimit: 6,
        minLimit: 1,
      },
      woman: {
        maxLimit: 6,
        minLimit: 1,
      },
    },
  },
  {
    id: 'neutrophils_segmental',
    value: '',
    info: '',
    unit: '%',
    error: '',
    flag: 'unit',
    label: 'Нейтрофилы сегментоядерные',
    limits: {
      man: {
        maxLimit: 7,
        minLimit: 4.5,
      },
      woman: {
        maxLimit: 7,
        minLimit: 4.5,
      },
    },
  },
  {
    id: 'lymphocytes_relative',
    value: '',
    info: '',
    unit: '%',
    error: '',
    flag: 'unit',
    label: 'Лимфоциты',
    limits: {
      man: {
        maxLimit: 45,
        minLimit: 25,
      },
      woman: {
        maxLimit: 45,
        minLimit: 25,
      },
    },
  },
  {
    id: 'lymphocytes_absolute',
    value: '',
    info: '',
    unit: '10^9/л',
    error: '',
    flag: 'unit',
    label: 'Лимфоциты',
    limits: {
      man: {
        maxLimit: 3.0,
        minLimit: 1.2,
      },
      woman: {
        maxLimit: 3.0,
        minLimit: 1.2,
      },
    },
  },
  {
    id: 'monocytes_absolute',
    value: '',
    info: '',
    unit: '%',
    error: '',
    flag: 'unit',
    label: 'Моноциты',
    limits: {
      man: {
        maxLimit: 11,
        minLimit: 4,
      },
      woman: {
        maxLimit: 11,
        minLimit: 4,
      },
    },
  },
  {
    id: 'monocytes_relative',
    value: '',
    info: '',
    unit: '10^9/л',
    error: '',
    flag: 'unit',
    label: 'Моноциты',
    limits: {
      man: {
        maxLimit: 0.6,
        minLimit: 0.1,
      },
      woman: {
        maxLimit: 0.6,
        minLimit: 0.1,
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
    label: '(СОЭ) Скорость осед-я эритроцитов',
    limits: {
      man: {
        maxLimit: 10,
        minLimit: 1,
      },
      woman: {
        maxLimit: 15,
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

  state = { indicators: [...Indicators], sex: 'man', isVisible: false }

  _showDialog = () => this.setState({ isVisible: true });

  _hideDialog = () => this.setState({ isVisible: false });

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

    let errorCount = 0;

    indicators.forEach((el, i) => {
      const { limits, value, flag } = el;

      if (flag === 'error') errorCount += 1;

      if (!value && flag !== 'error') {
        errorCount += 1;
        return this.showInfo(i, { flag: 'error', error: 'Пустая строка' });
      }

      if (Number.isNaN(parseInt(value, 10)) && flag !== 'error') {
        errorCount += 1;
        return this.showInfo(i, { flag: 'error', error: 'Недопустимый формат' });
      }

    // if (value > limits[sex].maxLimit) {
      //   return this.showInfo(i, { flag: 'info', info: 'Превышена норма' });
      // }
      
      // if (value < limits[sex].minLimit) {
        //   return this.showInfo(i, { flag: 'info', info: 'Значение ниже нормы' });
        // }
        
        // return this.showInfo(i, { flag: 'info', info: 'Норма' });
      });

    return !errorCount ? this._showDialog() : undefined;
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

  validate = (i) => {
    const { indicators } = this.state;
    const { value, flag } = indicators[i];

    if (!value && flag !== 'error') {
      return this.showInfo(i, { flag: 'error', error: 'Пустая строка' });
    }

    if (Number.isNaN(parseInt(value, 10)) && flag !== 'error') {
      return this.showInfo(i, { flag: 'error', error: 'Недопустимый формат' });
    }

    return null;
  }

  render() {
    const { sex, indicators, isVisible } = this.state;

    return (
      <ScrollView>
        <Dialog
          isVisible={isVisible}
          hideDialog={this._hideDialog}
        />
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
                      onBlur={() => this.validate(indx)}
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
                <Text>М</Text>
                <S.RadioBtn
                  color="#6200ee"
                  value="man"
                />
              </View>
              <View>
                <Text>Ж</Text>
                <S.RadioBtn
                  color="#6200ee"
                  value="woman"
                />
              </View>
            </S.RadioBtn.Group>
          </S.Container>
          <S.SButton
            icon="search"
            mode="contained"
            onPress={this.handleClick}
          >
            Проверить
          </S.SButton>
        </S.Wrapper>
      </ScrollView>
    );
  }
}

export default BloodForm;
