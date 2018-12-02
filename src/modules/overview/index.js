import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { List } from 'react-native-paper';

import { actions } from '../../redux/auth';

import * as S from './styled';

class Overview extends Component {
  static navigationOptions = () => ({ title: 'Меню' });

  state = {
    expanded: true,
  }

  handlePress = () => this.setState(({ expanded }) => ({
    expanded: !expanded,
  }));

  handleClick = i => () => {
    const { navigation } = this.props;
    switch (i) {
      case 0:
        navigation.navigate('Drugs', {
          headerTitle: 'Меню',
        });
        break;
      case 4:
        navigation.navigate('TestsForm', {
          headerTitle: 'Меню',
        });
        break;
      default:
        return null;
    }
    return null;
  }

  render() {
    const { overview } = this.props;
    const { expanded } = this.state;

    return (
      <List.Section>
        <List.Accordion
          title="Healthy Helper features"
          left={props => <S.TitleIcon {...props} name="cardiogram" size={40} />}
          expanded={expanded}
          onPress={this.handlePress}
        >
          <S.Separator />
          {
            overview.data.map((elem, indx) => (
              <Fragment key={elem.id}>
                <S.ListItem
                  title={elem.name}
                  onPress={this.handleClick(indx)}
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

Overview.propTypes = {
  overview: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ overview }) => ({
  overview,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
  }, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Overview);
