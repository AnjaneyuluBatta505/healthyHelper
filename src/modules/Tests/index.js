import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { List, IconButton } from 'react-native-paper';

import { ListItem, Separator, ItemIcon, TitleIcon } from '../../helpers/layout/List';

const analysis = [
  {
    id: `$_${Math.random().toString(36).substr(2, 9)}`,
    value: 'Анализ мочи',
    route: 'UrineForm',
    iconName: 'urine',
  },
  // {
  //   id: `$_${Math.random().toString(36).substr(2, 9)}`,
  //   value: 'Анализ крови',
  //   route: 'GeneralBloodTest',
  //   iconName: 'testtube',
  // },
  {
    id: `$_${Math.random().toString(36).substr(2, 9)}`,
    value: 'Общий анализ крови',
    route: 'BloodForm',
    iconName: 'testtube',
  },
  // {
  //   id: `$_${Math.random().toString(36).substr(2, 9)}`,
  //   value: 'Витамины',
  //   route: 'vitamins',
  //   iconName: 'vitamins',
  // },
  // {
  //   id: `$_${Math.random().toString(36).substr(2, 9)}`,
  //   value: 'Гормоны',
  //   route: 'HormonesForm',
  //   iconName: 'balance',
  // },
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
          left={props => <TitleIcon {...props} name="test" size={40} />}
          expanded={expanded}
          onPress={this.handlePress}
        >
          <Separator />
          {
            analysis.map(elem => (
              <Fragment key={elem.id}>
                <ListItem
                  title={elem.value}
                  left={props => <ItemIcon {...props} name={elem.iconName} size={35} />}
                  onPress={this.handleClick(elem.id)}
                  right={() => (
                    <IconButton
                      icon="arrow-forward"
                      size={20}
                      onPress={this.handleClick(elem.id)}
                    />
                  )}
                />
                <Separator />
              </Fragment>
            ))
          }
        </List.Accordion>
      </List.Section>
    );
  }
}

export default (Tests);
