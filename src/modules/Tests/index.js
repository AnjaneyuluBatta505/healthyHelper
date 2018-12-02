import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from 'react-native-paper';

import * as S from './styled';

const analysis = [
  {
    id: `$_${Math.random().toString(36).substr(2, 9)}`,
    value: 'Анализ мочи',
    route: 'wee',
    iconName: 'urine',
  },
  {
    id: `$_${Math.random().toString(36).substr(2, 9)}`,
    value: 'Анализ крови',
    route: 'BloodForm',
    iconName: 'testtube',
  },
  {
    id: `$_${Math.random().toString(36).substr(2, 9)}`,
    value: 'Витамины',
    route: 'vitamins',
    iconName: 'vitamins',
  },
  {
    id: `$_${Math.random().toString(36).substr(2, 9)}`,
    value: 'Гормоны',
    route: 'HormonesForm',
    iconName: 'balance',
  },
];

class Tests extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = () => ({ title: 'Analyses' });

  state = {
    expanded: true,
  }

  handlePress = () => this.setState(({ expanded }) => ({
    expanded: !expanded,
  }));

  handleClick = _id => () => {
    const { navigation } = this.props;
    const { route } = analysis.filter(({ id }) => id === _id)[0];
    navigation.navigate(route, {
      route,
    });
  }

  render() {
    const { expanded } = this.state;

    return (
      <List.Section>
        <List.Accordion
          title="Healthy Helper features"
          left={props => <S.TitleIcon {...props} name="test" size={40} />}
          expanded={expanded}
          onPress={this.handlePress}
        >
          <S.Separator />
          {
            analysis.map(elem => (
              <Fragment key={elem.id}>
                <S.ListItem
                  title={elem.value}
                  onPress={this.handleClick(elem.id)}
                  left={props => <S.ItemIcon {...props} name={elem.iconName} size={35} />}
                />
                <S.Separator />
              </Fragment>
            ))
          }
        </List.Accordion>
      </List.Section>
    );
  }
}

export default Tests;
