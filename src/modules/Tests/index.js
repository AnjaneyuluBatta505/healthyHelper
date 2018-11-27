import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const analysis = [
  {
    id: `$_${Math.random().toString(36).substr(2, 9)}`,
    value: 'Анализ мочи',
    route: 'wee',
  },
  {
    id: `$_${Math.random().toString(36).substr(2, 9)}`,
    value: 'Анализ крови',
    route: 'BloodForm',
  },
  {
    id: `$_${Math.random().toString(36).substr(2, 9)}`,
    value: 'Витамины',
    route: 'vitamins',
  },
  {
    id: `$_${Math.random().toString(36).substr(2, 9)}`,
    value: 'Гормоны',
    route: 'hormones',
  },
];

class Tests extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = () => ({ title: 'Analyses' });

  handleClick = (_id) => {
    const { navigation } = this.props;
    const { route } = analysis.filter(({ id }) => id === _id)[0];
    navigation.navigate(route, {
      route,
    });
  }

  render() {
    return (
      <S.Container>
        {
          analysis.map(({ id, value }) => (
            <S.Item
              key={id}
              onPress={() => this.handleClick(id)}
            >
              <S.StyledText>{value}</S.StyledText>
            </S.Item>
          ))
        }
      </S.Container>
    );
  }
}

export default Tests;
