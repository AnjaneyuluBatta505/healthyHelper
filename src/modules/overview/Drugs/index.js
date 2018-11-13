import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';

import { actions } from '../../../redux/auth';

import * as S from './styled';

class Drugs extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('headerTitle', '')} > Drugs`,
  })

  handleClick = (i) => {
    const { navigation, drugs } = this.props;
    navigation.navigate('ListOfDrugs', {
      headerTitle: `${navigation.getParam('headerTitle', '')} > Drugs > ${drugs.data[i].name}`,
      id: i,
    });
  }

  render() {
    const { drugs } = this.props;
    return (
      <S.Container>
        {
          drugs.data.map((el, i) => (
            <S.Item key={i} onPress={() => this.handleClick(i)}>
              <S.StyledText>{el.name}</S.StyledText>
            </S.Item>
          ))
        }
      </S.Container>
    );
  }
}

Drugs.defaultProps = {
  // overview: [],
};

Drugs.propTypes = {
  // overview: PropTypes.arrayOf(),
};

const mapStateToProps = ({ drugs }) => ({
  drugs,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
  }, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Drugs);
