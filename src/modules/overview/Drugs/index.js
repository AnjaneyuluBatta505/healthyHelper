import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { actions } from '../../../redux/auth';

import * as S from './styled';

class Drugs extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
    drugs: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('headerTitle', '')} > Drugs`,
  })

  handleClick = (id, i) => {
    const { navigation, drugs } = this.props;
    navigation.navigate('ListOfDrugs', {
      headerTitle: `${navigation.getParam('headerTitle', '')} > Drugs > ${drugs.data[i].name}`,
      id,
    });
  }

  render() {
    const { drugs } = this.props;
    return (
      <S.Container>
        {
          drugs.data.map((el, i) => (
            <S.Item key={el.id} onPress={() => this.handleClick(el.id, i)}>
              <S.StyledText>{el.name}</S.StyledText>
            </S.Item>
          ))
        }
      </S.Container>
    );
  }
}

const mapStateToProps = ({ drugs }) => ({
  drugs,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drugs);
