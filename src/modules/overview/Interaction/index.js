import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native';
import update from 'immutability-helper';
import { Card, Paragraph, Searchbar, List, Title } from 'react-native-paper';

import { Separator } from '../../../helpers/layout/List';
import Loader from '../../../components/Loader';
import { actions as interactionActions } from '../../../redux/overview/drugs/integration';
import getData from './selectors';

import * as S from './styled';

class Interaction extends Component {
  static navigationOptions = () => ({ headerTitle: 'Проверка взаимодействия' });

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    actions: PropTypes.shape({
      getDataByStringRequest: PropTypes.func,
    }).isRequired,
    isLoading: PropTypes.bool.isRequired,
    searchString: PropTypes.string.isRequired,
  }

  state = {
    data: [],
  }

  /* eslint-disable */
  componentDidUpdate(prevProps) {
    const { data } = this.props;

    if (prevProps.data !== data) {
      this.setState({ data });
    }
  }
  /* eslint-enable */

  handlePress = id => () => {
    const { data } = this.state;
    const indx = data.findIndex(({ _id }) => _id === id);

    this.setState(({ data }) => ({
      data: update(data, { [indx]: { expanded: { $set: !data[indx].expanded } } }),
    }));
  }

  handleInput = (value) => {
    const { actions } = this.props;
    actions.setSearchString(value);
  }

  render() {
    const { data } = this.state;
    const { isLoading, searchString } = this.props;

    return (
      <Fragment>
        <S.Container>
          <Paragraph>Введите как минимум 2 символа для поиска</Paragraph>
        </S.Container>
        <Searchbar
          placeholder="Азими..."
          onChangeText={query => this.handleInput(query)}
          value={searchString}
        />
        {
          !isLoading ? (
            <List.Section>
              <ScrollView>
                <Separator />
                {
                  data.map(({ _id, name, interactions, expanded }) => (
                    <List.Accordion
                      key={_id}
                      title={name}
                      expanded={expanded}
                      onPress={this.handlePress(_id)}
                    >
                      <Separator />
                      <S.Wrapp>
                        <Card.Content>
                          <Title>Взаимодействие с другими лекарственными средствами</Title>
                        </Card.Content>
                        <Card.Content>
                          <Paragraph>{interactions}</Paragraph>
                        </Card.Content>
                      </S.Wrapp>
                      <Separator />
                    </List.Accordion>
                  ))
              }
              </ScrollView>
            </List.Section>
          ) : <Loader />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = ({ intagration: { data, isLoading, searchString } }) => ({
  data: getData({ data }),
  isLoading,
  searchString,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...interactionActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Interaction);
