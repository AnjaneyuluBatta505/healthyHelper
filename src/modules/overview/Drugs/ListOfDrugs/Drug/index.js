import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { actions } from '../../../../../redux/auth';
import getDrugInfo from './selectors';

import * as S from './styled';

class Drug extends Component {
  static propTypes = {
    info: PropTypes.shape({}).isRequired,
    navigation: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = () => ({
    title: 'Информация об лекарстве',
  })

  render() {
    const { info } = this.props;
    const {
      indicationsForUse,
      methodOfApplication,
      sideEffect,
      contraindications,
      dosageAdministration,
      composition,
    } = info.instruction;
    return (
      <S.Container>
        <ScrollView>
          <S.Wrapp>
            <S.Header>Общая информация</S.Header>
            <S.StyledText>Препарат - <S.BoldText>{info.name}</S.BoldText></S.StyledText>
            {
              !!info.deliveryForm && (
                <S.StyledText>
                  Форма выпуска -
                  <S.BoldText>
                    {` ${info.deliveryForm}`}
                  </S.BoldText>
                </S.StyledText>
              )
            }
            <S.StyledText>
              Производитель - <S.BoldText>{info.manufacturer}</S.BoldText>
            </S.StyledText>
          </S.Wrapp>
          {
            !!composition && (
              <S.Wrapp>
                <S.Header>Состав</S.Header>
                <S.StyledText>
                  {composition}
                </S.StyledText>
              </S.Wrapp>
            )
          }
          {
            !!indicationsForUse && (
              <S.Wrapp>
                <S.Header>Показания к применению</S.Header>
                <S.StyledText>
                  {indicationsForUse}
                </S.StyledText>
              </S.Wrapp>
            )
          }
          {
            !!methodOfApplication && (
              <S.Wrapp>
                <S.Header>Способ применеия</S.Header>
                <S.StyledText>
                  {methodOfApplication}
                </S.StyledText>
              </S.Wrapp>
            )
          }
          {
            !!sideEffect && (
              <S.Wrapp>
                <S.Header>Побочные действия</S.Header>
                <S.StyledText>
                  {sideEffect}
                </S.StyledText>
              </S.Wrapp>
            )
          }
          {
            !!contraindications && (
              <S.Wrapp>
                <S.Header>Противопоказания</S.Header>
                <S.StyledText>
                  {contraindications}
                </S.StyledText>
              </S.Wrapp>
            )
          }
          {
            !!dosageAdministration && (
              <S.Wrapp>
                <S.Header>Дозировка</S.Header>
                <S.StyledText>
                  {dosageAdministration}
                </S.StyledText>
              </S.Wrapp>
            )
          }
        </ScrollView>
      </S.Container>
    );
  }
}

const mapStateToProps = ({ drugs }, { navigation }) => {
  const groupId = navigation.getParam('groupId');
  const drugId = navigation.getParam('drugId');
  return ({
    info: getDrugInfo({ drugs, groupId, drugId }),
  });
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drug);
