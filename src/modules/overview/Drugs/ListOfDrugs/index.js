import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

  handleClick = (id) => {
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
      <S.Container>
        <S.InputContainer>
          <S.StyledInput
            placeholder="Search text"
            value={searchString}
            onChangeText={text => this.setState({ searchString: text })}
          />
        </S.InputContainer>
        <FlatList
          data={info}
          renderItem={({ item }) => (
            <S.StyledItemOfList key={item.id} onPress={() => this.handleClick(item.id)}>
              <S.StyledText key={item.id}>{item.name}</S.StyledText>
            </S.StyledItemOfList>
          )}
        />
      </S.Container>
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
