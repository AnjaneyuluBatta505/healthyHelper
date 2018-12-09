import React, { Component } from 'react';
import { ScrollView, Linking, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Card, Title, Paragraph } from 'react-native-paper';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { actions as drugsActions } from '../../../../../redux/overview/drugs';
import Loader from '../../../../../components/Loader';

import * as S from './styled';

class Drug extends Component {
  static propTypes = {
    drugInfo: PropTypes.shape({}).isRequired,
    navigation: PropTypes.shape({}).isRequired,
    isLoading: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      getDrugInfoRequest: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = () => ({
    title: 'Информация об лекарстве',
  })

  componentDidMount() {
    const { actions, navigation } = this.props;
    const drugId = navigation.getParam('drugId');
    actions.getDrugInfoRequest(drugId);
  }

  handleClick = () => {
    const { drugInfo: { web } } = this.props;

    Linking.canOpenURL(web).then((supported) => {
      if (supported) {
        Linking.openURL(web);
      } else {
        console.log(`Don't know how to open URI: ${web}`);
      }
    });
  };

  render() {
    const { drugInfo, isLoading } = this.props;

    if (isLoading || Object.keys(drugInfo).length === 0) {
      return <Loader />;
    }

    const {
      instruction: {
        indicationsForUse,
        methodOfApplication,
        sideEffect,
        contraindications,
        dosageAdministration,
        composition,
        interactions,
      },
      name,
      deliveryForm,
      web,
      manufacturer,
      PH,
    } = drugInfo;

    return (
      <S.Container>
        <ScrollView>
          <S.Wrapp>
            <Card.Content>
              <Title>Общая информация</Title>
              <S.StyledText>Препарат - <S.BoldText>{name}</S.BoldText></S.StyledText>
            </Card.Content>
            <Card.Content>
              {
                !!deliveryForm && (
                  <S.StyledText>
                    Форма выпуска -
                    <S.BoldText>
                      {` ${deliveryForm}`}
                    </S.BoldText>
                  </S.StyledText>
                )
              }
            </Card.Content>
            <Card.Content>
              {
                !!web && (
                  <TouchableOpacity onPress={this.handleClick}>
                    <S.Btn>
                    Доп. инфо
                    </S.Btn>
                  </TouchableOpacity>
                )
              }
            </Card.Content>
            <Card.Content>
              <S.StyledText>
                Производитель -
                <S.BoldText>
                  {manufacturer}
                </S.BoldText>
              </S.StyledText>
            </Card.Content>
            <Card.Content>
              {
                !!PH && (
                  <S.StyledText>
                    Фармакотерапевтическая группа (ФТГ):
                    <S.BoldText>
                      {` ${PH}`}
                    </S.BoldText>
                  </S.StyledText>
                )
              }
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
          {
            !!interactions && (
              <S.Wrapp>
                <Card.Content>
                  <Title>Взаимодействие с другими лекарственными средствами</Title>
                </Card.Content>
                <Card.Content>
                  <Paragraph>{interactions}</Paragraph>
                </Card.Content>
              </S.Wrapp>
            )
          }
        </ScrollView>
      </S.Container>
    );
  }
}

const mapStateToProps = ({ drugs: { isLoading, drugInfo } }) => ({
  drugInfo,
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...drugsActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drug);
