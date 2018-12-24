import React, { PureComponent, Fragment } from 'react';
import { ScrollView } from 'react-native';
import update from 'immutability-helper';
import { Card, List, Paragraph } from 'react-native-paper';

import { Separator } from '../../../helpers/layout/List';
import { altMedicineData } from './config';

class AltMedicine extends PureComponent {
  static navigationOptions = ({
    title: 'Альтернативная медицина',
  })

  state = { data: [...altMedicineData] }

  handlePress = indx => () => this.setState(({ data }) => ({
    data: update(data, { [indx]: { expanded: { $set: !data[indx].expanded } } }),
  }))

  render() {
    const { data } = this.state;

    return (
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
    );
  }
}

export default AltMedicine;
