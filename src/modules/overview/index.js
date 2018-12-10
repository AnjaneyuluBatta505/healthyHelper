import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { Title, IconButton } from 'react-native-paper';

import { actions as overviewActions } from '../../redux/overview';
import { TitleIcon, ItemIcon, Separator, ListItem } from '../../helpers/layout/List';
import Loader from '../../components/Loader';

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

  componentDidMount() {
    const { actions } = this.props;
    actions.getOverviewDataRequest();
  }

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
      default:
        return null;
    }
    return null;
  }

  render() {
    const { data, isLoading } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <S.Wrapper>
        {
          data.map((elem, indx) => (
            <Fragment key={elem._id}>
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
  navigation: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ overview }) => ({
  data: overview.data,
  isLoading: overview.isLoading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...overviewActions,
  }, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Overview);
