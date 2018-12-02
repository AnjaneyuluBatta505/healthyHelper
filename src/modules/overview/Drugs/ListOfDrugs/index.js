import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native';

import { actions } from '../../../../redux/auth';
import getListOfDrugs from './selectors';

import * as S from './styled';

class ListOfDrugs extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
    drugs: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('headerTitle', '')}`,
  })

  state = {
    searchString: '',
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
    const { drugs } = this.props;
    const { searchString } = this.state;

    const info = drugs.saleNaming;

    return (
      <List.Section>
        <ScrollView>
          <Searchbar
            placeholder="Search"
            onChangeText={query => this.setState({ searchString: query })}
            value={searchString}
          />
          <S.Container>
            <S.Separator />
            {
              info.map(elem => (
                <Fragment key={elem.id}>
                  <S.ListItem
                    title={elem.name}
                    onPress={this.handleClick(elem.id)}
                  />
                  <S.Separator />
                </Fragment>
              ))
            }
          </S.Container>
        </ScrollView>
      </List.Section>
    );
  }
}

const mapStateToProps = ({ drugs }, { navigation }) => {
  const id = navigation.getParam('id');
  return ({
    drugs: getListOfDrugs({ drugs, id }),
  });
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfDrugs);
