import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Text, TextInput, View, Button } from 'react-native';

import * as S from './styled';

class BloodForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = () => ({ title: 'Анализ Крови' });

  state = {
    glucose: '',
    hemoglobin: '',
    leukocytes: '',
    erythrocytes: '',
    hematocrit: '',
    numbPlatelets: '',
    esr: '',
  }

  handleChange = (key, value) => this.setState({ [key]: value })

  handleClick = () => {
    console.log('1')
  }

  render() {
    // const { navigation } = this.props;
    const {
      glucose,
      hemoglobin,
      leukocytes,
      erythrocytes,
      hematocrit,
      numbPlatelets,
      esr,
    } = this.state;
    // const route = navigation.getParam('route')
    return (
      <S.Container>
        <S.InputWrapper>
          <S.Label>Глюкоза</S.Label>
          <S.Input
            value={glucose}
            onChangeText={text => this.handleChange('glucose', text)}
          />
          <S.Label>*10^3/μL</S.Label>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Гемоглобин</S.Label>
          <S.Input
            value={hemoglobin}
            onChangeText={text => this.handleChange('hemoglobin', text)}
          />
          <S.Label>*10^3/μL</S.Label>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Лейкоциты</S.Label>
          <S.Input
            value={leukocytes}
            onChangeText={text => this.handleChange('leukocytes', text)}
          />
          <S.Label>*10^3/μL</S.Label>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Эритроциты</S.Label>
          <S.Input
            value={erythrocytes}
            onChangeText={text => this.handleChange('erythrocytes', text)}
          />
          <S.Label>*10^3/μL</S.Label>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Гематокрит</S.Label>
          <S.Input
            value={hematocrit}
            onChangeText={text => this.handleChange('hematocrit', text)}
          />
          <S.Label>*10^3/μL</S.Label>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Количество тромбоцитов</S.Label>
          <S.Input
            value={numbPlatelets}
            onChangeText={text => this.handleChange('numbPlatelets', text)}
          />
          <S.Label>*10^3/μL</S.Label>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Скорость оседания эритроцитов</S.Label>
          <S.Input
            value={esr}
            onChangeText={text => this.handleChange('esr', text)}
          />
          <S.Label>*10^3/μL</S.Label>
        </S.InputWrapper>
        <S.Button
          onPress={() => this.handleClick()}
        >
          <S.BtnText>Проверить</S.BtnText>
        </S.Button>
      </S.Container>
    );
  }
}

export default BloodForm;
