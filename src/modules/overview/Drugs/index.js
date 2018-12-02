import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';

import { Separator, ListItem } from '../../../helpers/layout/List';

class Drugs extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
    drugs: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = {
    title: 'Лечебные средства',
  }

  handleClick = (id, i) => () => {
    const { navigation, drugs } = this.props;
    navigation.navigate('ListOfDrugs', {
      headerTitle: `${drugs.data[i].name}`,
      id,
    });
  }

  render() {
    const { drugs } = this.props;

    return (
      <ScrollView>
        <Fragment>
          <Separator />
          {
            drugs.data.map((elem, indx) => (
              <Fragment key={elem.id}>
                <ListItem
                  title={elem.name}
                  onPress={this.handleClick(elem.id, indx)}
                  right={() => (
                    <IconButton
                      icon="arrow-forward"
                      size={20}
                      onPress={this.handleClick(elem.id, indx)}
                    />
                  )}
                />
                <Separator />
              </Fragment>
            ))
          }
        </Fragment>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ drugs }) => ({
  drugs,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drugs);
