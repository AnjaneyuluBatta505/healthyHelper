import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';

import { actions } from '../../redux/auth';

import * as S from './styled';

class Overview extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Overview',
    };
  };

  handleClick = (id) => {
    const { navigation } = this.props;
    if (id === '0') {
      navigation.navigate('Drugs', {
        headerTitle: 'Overview',
      });
    }
  }

  render() {
    const { overview } = this.props;
    return (
      <S.Container>
        {
          overview.data.map(el => (
            <S.Item key={el.id} onPress={() => this.handleClick(el.id)}>
              <S.StyledText>
                {el.name}
              </S.StyledText>
            </S.Item>
          ))
        }
      </S.Container>
    );
  }
}

Overview.defaultProps = {
  // overview: [],
};

Overview.propTypes = {
  // overview: PropTypes.arrayOf(),
};

const mapStateToProps = state => ({
  overview: state.overview,
  state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
  }, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Overview);
