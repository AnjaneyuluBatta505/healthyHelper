import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';

import { actions } from '../../../redux/auth';

import * as S from './styled';

class Drugs extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
    drugs: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('headerTitle', '')} > Препараты`,
  })

  state = {
    expanded: true,
  }

  handlePress = () => this.setState(({ expanded }) => ({
    expanded: !expanded,
  }));

  handleClick = (id, i) => () => {
    const { navigation, drugs } = this.props;
    navigation.navigate('ListOfDrugs', {
      headerTitle: `${navigation.getParam('headerTitle', '')} > Препараты > ${drugs.data[i].name}`,
      id,
    });
  }

  render() {
    const { drugs } = this.props;
    const { expanded } = this.state;

    return (
      <List.Section>
        <ScrollView>
          <List.Accordion
            title="Healthy Helper features"
            left={props => <S.TitleIcon {...props} name="cardiogram" size={40} />}
            expanded={expanded}
            onPress={this.handlePress}
          >
            <S.Separator />
            {
              drugs.data.map((elem, indx) => (
                <Fragment key={elem.id}>
                  <S.ListItem
                    title={elem.name}
                    onPress={this.handleClick(elem.id, indx)}
                  />
                  <S.Separator />
                </Fragment>
              ))
            }
          </List.Accordion>
        </ScrollView>
      </List.Section>
    );
  }
}

const mapStateToProps = ({ drugs }) => ({
  drugs,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drugs);
