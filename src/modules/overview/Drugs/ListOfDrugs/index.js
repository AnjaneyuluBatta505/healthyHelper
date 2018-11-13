import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';

import { actions } from '../../../../redux/auth';

import * as S from './styled';

class ListOfDrugs extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('headerTitle', '')}`,
  })

  state = {
    searchString: '',
  }

  render() {
    const { drugs, navigation } = this.props;
    const { searchString } = this.state;
    const id = navigation.getParam('id');
    const info = drugs.data[id].saleNaming;
    console.log(searchString)
    return (
      <S.Container>
        <S.InputContainer>
          <S.StyledInput
            placeholder="find"
            value={searchString}
            onChangeText={text => this.setState({ searchString: text })}
          />
        </S.InputContainer>
        <FlatList
        // style={{ flex: 1, }}
          data={info}
          renderItem={({ item }) => (
            <S.StyledItemOfList>
              <Text>* {item.name}</Text>
            </S.StyledItemOfList>
          )}
        />
      </S.Container>
    );
  }
}

ListOfDrugs.defaultProps = {
  // overview: [],
};

ListOfDrugs.propTypes = {
  // overview: PropTypes.arrayOf(),
};

const mapStateToProps = ({ drugs }) => ({
  drugs,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
  }, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ListOfDrugs);
