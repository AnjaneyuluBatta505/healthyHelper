import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { actions } from '../../redux/auth';

import * as S from './styled';

class Overview extends Component {
  handleClick = () => {}

  render() {
    console.log(this.props);
    return (
      <S.Container>
        <S.StyledText>
          Some data
        </S.StyledText>
      </S.Container>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
  }, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Overview);
