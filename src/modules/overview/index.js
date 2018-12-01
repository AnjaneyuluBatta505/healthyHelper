import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Text, TextInput, View, Button } from 'react-native';
import { bindActionCreators, compose } from 'redux';
// import CustomIcon from '../../components/CustomIcon.js'
import { List, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomIcon from '../../components/CustomIcon.js';

// import axios from 'axios';
import { actions } from '../../redux/auth';
import * as S from './styled';

class Overview extends Component {
  static navigationOptions = () => ({ title: 'Overview' });

  // state = {
  //   data: [],
  // name: '',
  // price: ''
  // }
  state = {
    expanded: true,
  }

  _handlePress = () => this.setState(({ expanded }) => ({
    expanded: !expanded,
  }));

  // componentDidMount() {
  //   axios.get('https://fathomless-island-87115.herokuapp.com/products')
  //     .then(response => response.data)
  //     .then(responseJson => this.setState({ data: responseJson }))
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  // request = () => axios.get('https://fathomless-island-87115.herokuapp.com/products')
  //   .then(response => response.data)
  //   .then(responseJson => this.setState({ data: responseJson }))
  //   .catch((error) => {
  //     console.error(error);
  //   });

  handleClick = (i) => {
    const { navigation } = this.props;
    switch (i) {
      case 0:
        navigation.navigate('Drugs', {
          headerTitle: 'Overview',
        });
        break;
      case 4:
        navigation.navigate('TestsForm', {
          headerTitle: 'Overview',
        });
        break;
      default:
        return null;
    }
    return null;
  }

  // handleClickOnBtn = () => {
  //   const { name, price } = this.state;
  //   axios.post('https://fathomless-island-87115.herokuapp.com/products/create', { name, price })
  //     .then(this.request)
  //     // .then(responseJson => this.setState({ data: responseJson }))
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  render() {
    const { overview } = this.props;
    // const { data, name, price } = this.state;

    return (
      <List.Section title="Accordions">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Controlled Accordion"
          left={props => <CustomIcon {...props} name="medicine" size={50} /> }
          expanded={this.state.expanded}
          onPress={this._handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    );
    // return (
    //   <S.Container>
    //     <CustomIcon name='android' size={25} /> 
    //     {/* <TextInput
    //       style={{height: 40, border: 3, borderColor: 'black', width: 120}}
    //       value={name}
    //       placeholder="Name"
    //       onChangeText={text => this.setState({ name: text })}
    //     />
    //     <TextInput
    //       style={{height: 40, border: 3, borderColor: 'black', width: 120}}
    //       value={price}
    //       placeholder="Price"
    //       onChangeText={text => this.setState({ price: text })}
    //     />
    //     <Button
    //       onPress={this.handleClickOnBtn}
    //       title="Post data"
    //   /> */}
    //     {/* {
    //       overview.data.map((el, i) => (
    //         <S.Item key={el.id} onPress={() => this.handleClick(i)}>
    //           <S.StyledText>
    //             {el.name}
    //           </S.StyledText>
    //         </S.Item>
    //       ))
    //     } */}
    //   </S.Container>
    // );
  }
}

Overview.defaultProps = {
};

Overview.propTypes = {
  overview: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  overview: state.overview,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
  }, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Overview);
