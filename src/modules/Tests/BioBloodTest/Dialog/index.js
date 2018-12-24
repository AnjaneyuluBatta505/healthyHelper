import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Paragraph, Dialog as PaperDialog, Portal, List, Card, Title, Divider } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import update from 'immutability-helper';

import { Indicators } from '../config';
import { Separator } from '../../../../helpers/layout/List';
import * as S from './styled';

const IconNames = {
  up: 'long-arrow-pointing-up',
  down: 'down-arrow',
  normal: 'correct-symbol',
};

class Dialog extends PureComponent {
  state = {
    data: Indicators.map(el => ({ ...el, expanded: false })),
  }

  handlePress = indx => () => this.setState(({ data }) => ({
    data: update(data, { [indx]: { expanded: { $set: !data[indx].expanded } } }),
  }))

  _getLabel = (label, limits) => {
    const { values } = this.props;
    const { sex } = values;
    const res = values[label];

    if (res < limits[sex].minLimit) {
      return `${label} ниже нормы.`;
    }

    if (res > limits[sex].maxLimit) {
      return `${label} выше нормы.`;
    }

    return `${label} в норме.`;
  }

  _getIcon = (props, label, limits) => {
    const { values } = this.props;
    const { sex } = values;

    if (values[label] < limits[sex].minLimit) {
      return <S.TitleIcon {...props} name={IconNames.down} size={20} />;
    }

    if (values[label] > limits[sex].maxLimit) {
      return <S.TitleIcon {...props} name={IconNames.up} size={20} />;
    }

    return <S.TitleIcon {...props} name={IconNames.normal} size={20} />;
  }

  _getDescription = (label, limits, less, more) => {
    const { values } = this.props;
    const { sex } = values;

    if (values[label] < limits[sex].minLimit) {
      return less;
    }

    if (values[label] > limits[sex].maxLimit) {
      return more;
    }

    return '';
  }

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
            <ScrollView>
              <PaperDialog.Title>Результаты</PaperDialog.Title>

              <List.Section>
                <Separator />
                {
                  data.map((elem, indx) => {
                    const { id, limits, ifLess, ifMore, expanded, unit, label } = elem;
                    const { values: { sex, ...rest } } = this.props;

                    if (!rest[id]) {
                      return null;
                    }

                    return (
                      <Fragment key={id}>
                        <List.Accordion
                          title={this._getLabel(id, limits, unit)}
                          left={props => this._getIcon(props, id, limits)}
                          expanded={expanded}
                          onPress={this.handlePress(indx)}
                        >
                          <Separator />
                          <Card style={{ paddingLeft: 0 }}>
                            <S.Container>
                              <Title>
                                {label}
                              </Title>
                            </S.Container>
                            <Divider />
                            <S.Container>
                              <Paragraph>
                              Референсные значения: {limits[sex].minLimit} - {limits[sex].maxLimit}
                              </Paragraph>
                              <Paragraph>
                                {unit}
                              </Paragraph>
                            </S.Container>
                            <S.Container>
                              <Paragraph>
                              Результат: {rest[id]}
                              </Paragraph>
                              <Paragraph>
                                {unit}
                              </Paragraph>
                            </S.Container>
                            <Divider />
                            <Card.Content>
                              <Paragraph>
                                {this._getDescription(id, limits, ifLess, ifMore)}
                              </Paragraph>
                            </Card.Content>
                          </Card>
                        </List.Accordion>
                        <Separator />
                      </Fragment>
                    );
                  })
                }
              </List.Section>

              <PaperDialog.Content>
                <Paragraph>Данные действительны для взрослых мужчин и женщин</Paragraph>
              </PaperDialog.Content>

              <PaperDialog.Actions>
                <Button onPress={hideDialog}>Закрыть</Button>
              </PaperDialog.Actions>
            </ScrollView>
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
