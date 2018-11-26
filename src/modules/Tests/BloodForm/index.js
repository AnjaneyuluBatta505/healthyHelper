import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const indicators = {
  glucose: {
    value: '',
    info: 'ммоль/л',
    error: '',
    flag: false,
    label: 'Глюкоза',
  },
  hemoglobin: {
    value: '',
    info: 'g/dL',
    error: '',
    flag: false,
    label: 'Конц. гемоглобина',
  },
  leukocytes: {
    value: '',
    info: '*10^3/μL',
    error: '',
    flag: false,
    label: 'Конц. лейкоцитов',
  },
  erythrocytes: {
    value: '',
    info: '*10^3/μL',
    error: '',
    flag: false,
    label: 'Кол-во эритроцитов',
  },
  hematocrit: {
    value: '',
    info: '%',
    flag: false,
    label: 'Гематокрит',
  },
  numbPlatelets: {
    value: '',
    info: '*10^3/μL',
    error: '',
    flag: false,
    label: 'Кол-во тромбоцитов',
  },
  esr: {
    value: '',
    info: 'мм/час',
    error: '',
    flag: false,
    label: 'СОЭ',
  },
};

class BloodForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = () => ({ title: 'Анализ Крови' });

  state = { ...indicators }

  handleChange = (key, value) => {
    const { state } = this;
    if (state[key].flag) {
      return this.setState(prevState => ({
        [key]: {
          ...prevState[key],
          flag: false,
          error: '',
          value,
        },
      }));
    }

    return this.setState(
      prevState => ({ [key]: { ...prevState[key], value } }),
    );
  }

  checkOnEmptyString = el => this.setState(prevState => ({
    [el]: {
      ...prevState[el],
      flag: true,
      error: 'Пустая строка',
    },
  }))

  handleClick = () => {
    Object.keys(this.state).forEach((el) => {
      const { state } = this;
      if (!state[el].value) {
        this.checkOnEmptyString(el);
      }
    });
  }

  render() {
    return (
      <S.Wrapper>
        <S.Container>
          {
            Object.keys(this.state).map((el) => {
              const { state } = this;
              const { info, value, error, flag, label } = state[el];

              return (
                <S.InputWrapper key={el}>
                  <S.Input
                    label={label}
                    value={value}
                    error={error && error}
                    onChangeText={text => this.handleChange(`${el}`, text)}
                  />
                  <S.UnitText
                    type={!flag ? 'info' : 'error'}
                    visible="true"
                  >
                    {!flag ? info : error}
                  </S.UnitText>
                </S.InputWrapper>
              );
            })
          }
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
