import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Paragraph, Dialog as PaperDialog, Portal, List, Card } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import update from 'immutability-helper';

import { Indicators } from '../config';
import { Separator } from '../../../../helpers/layout/List';

class Dialog extends Component {
  state = {
    data: Indicators.map(el => ({ ...el, expanded: false })),
  }

  handlePress = indx => () => this.setState(({ data }) => ({
    data: update(data, { [indx]: { expanded: { $set: !data[indx].expanded } } }),
  }))

  render() {
    const { isVisible, hideDialog } = this.props;
    const { data } = this.state;

    return (
      <View>
        <Portal>
          <PaperDialog
            visible={isVisible}
            onDismiss={hideDialog}
          >
            <PaperDialog.Title>Результаты</PaperDialog.Title>

            <List.Section>
              <ScrollView>
                <Separator />
                {
                  data.map((elem, indx) => (
                    <Fragment key={elem.id}>
                      <List.Accordion
                        title={elem.name}
                        expanded={elem.expanded}
                        onPress={this.handlePress(indx)}
                      >
                        <Separator />
                        <Card>
                          <Card.Content>
                            <Paragraph>
                              {elem.description}
                            </Paragraph>
                          </Card.Content>
                        </Card>
                      </List.Accordion>
                      <Separator />
                    </Fragment>
                  ))
                }
              </ScrollView>
            </List.Section>

            <PaperDialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </PaperDialog.Content>

            <PaperDialog.Actions>
              <Button onPress={hideDialog}>Закрыть</Button>
            </PaperDialog.Actions>
          </PaperDialog>
        </Portal>
      </View>
    );
  }
}

Dialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hideDialog: PropTypes.func.isRequired,
};

export default Dialog;
