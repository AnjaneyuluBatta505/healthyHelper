import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Text, TextInput, View, Button } from 'react-native';

import * as S from './styled';

class WeeForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = () => ({ title: 'Анализ мочи' });

  state = {

  }

  handleChange = () => {
  }

  render() {
    // const { navigation } = this.props;
    // const route = navigation.getParam('route')
    return (
      <S.Container>
        {/* <S.Input */}
        {/* value={} */}
        {/* onChangeText={(text) => this.handleChange()} */}
        {/* // /> */}
        {/* {
          analysis.map(({ id, value }) => (
            <S.Item
              key={id}
              onPress={() => this.handleClick(id)}
            >
              <S.StyledText>{value}</S.StyledText>
            </S.Item>
          ))
        } */}
      </S.Container>
    );
  }
}

export default WeeForm;
