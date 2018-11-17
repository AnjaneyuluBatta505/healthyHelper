import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { actions } from '../../../../../redux/auth';
import getDrugInfo from './selectors';

import * as S from './styled';

class Drug extends Component {
  static propTypes = {
    info: PropTypes.shape({}).isRequired,
  }

  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('headerTitle', '')}`,
  })

  render() {
    const { info } = this.props;
    return (
      <S.Container>
        <S.StyledText>Препарат - <S.BoldText>{info.name}</S.BoldText></S.StyledText>
        {
          info.deliveryForm ? (
            <S.StyledText>
              Форма выпуска -
              <S.BoldText>
                {` ${info.deliveryForm}`}
              </S.BoldText>
            </S.StyledText>
          ) : null
        }
        <S.StyledText>Производитель - <S.BoldText>{info.manufacturer}</S.BoldText></S.StyledText>
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
