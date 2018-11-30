import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, Title, Paragraph } from 'react-native-paper';
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
            <Card.Content>
              <Title>Общая информация</Title>
              <Paragraph>Препарат - <S.BoldText>{info.name}</S.BoldText></Paragraph>
            </Card.Content>
            <Card.Content>
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
            </Card.Content>
            <Card.Content>
              <Paragraph>Производитель - <S.BoldText>{info.manufacturer}</S.BoldText></Paragraph>
            </Card.Content>
          </S.Wrapp>
          {
            !!composition && (
              <S.Wrapp>
                <Card.Content>
                  <Title>Состав</Title>
                </Card.Content>
                <Card.Content>
                  <Paragraph>{composition}</Paragraph>
                </Card.Content>
              </S.Wrapp>
            )
          }
          {
            !!indicationsForUse && (
              <S.Wrapp>
                <Card.Content>
                  <Title>Показания к применению</Title>
                </Card.Content>
                <Card.Content>
                  <Paragraph>{indicationsForUse}</Paragraph>
                </Card.Content>
              </S.Wrapp>
            )
          }
          {
            !!methodOfApplication && (
              <S.Wrapp>
                <Card.Content>
                  <Title>Способ применеия</Title>
                </Card.Content>
                <Card.Content>
                  <Paragraph>{methodOfApplication}</Paragraph>
                </Card.Content>
              </S.Wrapp>
            )
          }
          {
            !!sideEffect && (
              <S.Wrapp>
                <Card.Content>
                  <Title>Побочные действия</Title>
                </Card.Content>
                <Card.Content>
                  <Paragraph>{sideEffect}</Paragraph>
                </Card.Content>
              </S.Wrapp>
            )
          }
          {
            !!contraindications && (
              <S.Wrapp>
                <Card.Content>
                  <Title>Противопоказания</Title>
                </Card.Content>
                <Card.Content>
                  <Paragraph>{contraindications}</Paragraph>
                </Card.Content>
              </S.Wrapp>
            )
          }
          {
            !!dosageAdministration && (
              <S.Wrapp>
                <Card.Content>
                  <Title>Дозировка</Title>
                </Card.Content>
                <Card.Content>
                  <Paragraph>{dosageAdministration}</Paragraph>
                </Card.Content>
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
