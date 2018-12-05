import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { Title, IconButton } from 'react-native-paper';

import { TitleIcon, ItemIcon, Separator, ListItem } from '../../helpers/layout/List';

import * as S from './styled';

const HeaderTitle = () => (
  <Fragment>
    <S.Header>
      <TitleIcon style={{ color: '#fff' }} name="heartbeat" size={40} />
      <Title style={{ color: '#fff' }}>Healthy Helper</Title>
    </S.Header>
  </Fragment>
);

class Overview extends Component {
  static navigationOptions = () => ({ headerTitle: HeaderTitle() });

  handleClick = i => () => {
    const { navigation } = this.props;
    switch (i) {
      case 0:
        navigation.navigate('Drugs', {
          headerTitle: 'Меню',
        });
        break;
      case 1:
        navigation.navigate('Interaction', {
          headerTitle: 'Меню',
        });
        break;
      case 2:
        navigation.navigate('Tests', {
          headerTitle: 'Меню',
        });
        break;
      case 3:
        navigation.navigate('AltMedicine', {
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

    return (
      <S.Wrapper>
        {
          overview.data.map((elem, indx) => (
            <Fragment key={elem.id}>
              <S.Container>
                <ListItem
                  title={elem.name}
                  onPress={this.handleClick(indx)}
                  left={props => <ItemIcon {...props} name={elem.iconName} size={35} />}
                  right={() => (
                    <IconButton
                      icon="arrow-forward"
                      size={20}
                      onPress={this.handleClick(indx)}
                    />
                  )}
                />
                <Separator />
              </S.Container>
            </Fragment>
          ))
        }
      </S.Wrapper>
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
  actions: bindActionCreators({}, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Overview);
