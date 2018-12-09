import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, IconButton } from 'react-native-paper';
import { ScrollView } from 'react-native';

import { actions as drugsActions } from '../../../../redux/overview/drugs';
import { Separator, ListItem } from '../../../../helpers/layout/List';
import Loader from '../../../../components/Loader';

import * as S from './styled';

class ListOfDrugs extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
    listOfDrugs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isLoading: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      getListOfDrugsRequest: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('headerTitle', '')}`,
  })

  componentDidMount() {
    const { actions, navigation } = this.props;
    const id = navigation.getParam('id');
    actions.getListOfDrugsRequest(id);
  }

  handleClick = id => () => {
    const { navigation } = this.props;
    const groupId = navigation.getParam('id');
    navigation.navigate('Drug', {
      headerTitle: `${navigation.getParam('headerTitle', '')} > Препараты > ${'as'}`,
      drugId: id,
      groupId,
    });
  }

  render() {
    const { listOfDrugs, isLoading } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <List.Section>
        <ScrollView>
          <S.Container>
            <Separator />
            {
              listOfDrugs.map(elem => (
                <Fragment key={elem._id}>
                  <ListItem
                    title={elem.name}
                    onPress={this.handleClick(elem._id)}
                    right={() => (
                      <IconButton
                        icon="arrow-forward"
                        size={20}
                        onPress={this.handleClick(elem._id)}
                      />
                    )}
                  />
                  <Separator />
                </Fragment>
              ))
            }
          </S.Container>
        </ScrollView>
      </List.Section>
    );
  }
}

const mapStateToProps = ({ drugs: { listOfDrugs, isLoading } }) => ({
  listOfDrugs,
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...drugsActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfDrugs);
