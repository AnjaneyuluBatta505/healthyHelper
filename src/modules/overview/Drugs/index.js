import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';

import { Separator, ListItem } from '../../../helpers/layout/List';
import { actions as drugsGroupActions } from '../../../redux/overview/drugs';
import Loader from '../../../components/Loader';

class Drugs extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
    drugsGroup: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isLoading: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      getDrugsGroupDataRequest: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    title: 'Лечебные средства',
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getDrugsGroupDataRequest();
  }

  handleClick = (id, i) => () => {
    const { navigation, drugsGroup } = this.props;
    navigation.navigate('ListOfDrugs', {
      headerTitle: `${drugsGroup[i].name}`,
      id,
    });
  }

  render() {
    const { drugsGroup, isLoading } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <ScrollView>
        <Fragment>
          <Separator />
          {
            drugsGroup.map((elem, indx) => (
              <Fragment key={elem._id}>
                <ListItem
                  title={elem.name}
                  onPress={this.handleClick(elem._id, indx)}
                  right={() => (
                    <IconButton
                      icon="arrow-forward"
                      size={20}
                      onPress={this.handleClick(elem._id, indx)}
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

const mapStateToProps = ({ drugs: { drugsGroup, isLoading } }) => ({
  drugsGroup,
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...drugsGroupActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drugs);
