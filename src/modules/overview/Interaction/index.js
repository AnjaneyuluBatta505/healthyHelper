import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import update from 'immutability-helper';
import { Card, Paragraph, Searchbar, List, Title } from 'react-native-paper';

import { Separator } from '../../../helpers/layout/List';
import getData from './selectors';

import * as S from './styled';

class Interaction extends Component {
  static navigationOptions = () => ({ headerTitle: 'Проверка взаимодействия' });

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }

  /* eslint-disable */
  state = {
    searchString: '',
    outputSting: '',
    data: this.props.data,
    renderItemCount: null,
  }
  /* eslint-enable */

  handlePress = indx => () => this.setState(({ data }) => ({
    data: update(data, { [indx]: { expanded: { $set: !data[indx].expanded } } }),
  }))

  handleInput = value => this.setState({
    searchString: value.trim().toLowerCase(),
    outputSting: value,
  })

  render() {
    const { searchString, data, outputSting } = this.state;

    return (
      <Fragment>
        <S.Container>
          <Paragraph>Введите как минимум 2 символа для поиска</Paragraph>
        </S.Container>
        <Searchbar
          placeholder="Азими..."
          onChangeText={query => this.handleInput(query)}
          value={outputSting}
        />
        <List.Section>
          <ScrollView>
            <Separator />
            {
              data.map(({ id, name, expanded, interactions }, index) => {
                if (searchString.length >= 2 && name.indexOf(searchString) >= 0) {
                  return (
                    <List.Accordion
                      key={id}
                      title={name}
                      expanded={expanded}
                      onPress={this.handlePress(index)}
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
                  );
                }

                return null;
              })
          }
          </ScrollView>
        </List.Section>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ drugs }) => ({
  data: getData({ drugs }),
});

export default connect(mapStateToProps, null)(Interaction);
