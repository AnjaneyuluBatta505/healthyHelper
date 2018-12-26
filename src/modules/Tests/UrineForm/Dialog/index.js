import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Paragraph, Dialog as PaperDialog, Portal, List, Card, Title, Divider } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import update from 'immutability-helper';

import { IndicatorsForOut } from '../config';
import { Separator } from '../../../../helpers/layout/List';
import * as S from './styled';

const IconNames = {
  up: 'long-arrow-pointing-up',
  down: 'down-arrow',
  normal: 'correct-symbol',
  error: 'error-triangle',
};

class Dialog extends PureComponent {
  state = { data: [...IndicatorsForOut] }

  handleInputPress = (groupIndx, indx) => () => this.setState(({ data }) => ({
    data: update(data, { [groupIndx]: { inputs: { [indx]: {
      expanded: { $set: !data[groupIndx].inputs[indx].expanded } } } } }),
  }))

  handleRadioPress = indx => () => this.setState(({ data }) => ({
    data: update(data, { [indx]: { expanded: { $set: !data[indx].expanded } } }),
  }))

  _getInputLabel = (field, limits, label) => {
    const { values } = this.props;
    const { sex } = values;
    const res = values[field];

    if (res < limits[sex].minLimit) {
      return `${label} ниже нормы.`;
    }

    if (res > limits[sex].maxLimit) {
      return `${label} выше нормы.`;
    }

    return `${label} в норме.`;
  }

  _getRadioLabel = (curValue, reference, label) => {
    const { values } = this.props;

    if (values[curValue] === reference) {
      return `${label} в норме`;
    }

    return `${label} не в норме`;
  }

  _getInputIcon = (props, label, limits) => {
    const { values } = this.props;
    const { sex } = values;

    if (values[label] < limits[sex].minLimit) {
      return <S.TitleIcon {...props} color="red" name={IconNames.down} size={20} />;
    }

    if (values[label] > limits[sex].maxLimit) {
      return <S.TitleIcon {...props} color="red" name={IconNames.up} size={20} />;
    }

    return <S.TitleIcon {...props} color="green" name={IconNames.normal} size={20} />;
  }

  _getRadioIcon = (props, curValue, reference) => {
    const { values } = this.props;

    if (values[curValue] === reference) {
      return <S.TitleIcon {...props} color="green" name={IconNames.normal} size={20} />;
    }

    return <S.TitleIcon {...props} color="red" name={IconNames.error} size={20} />;
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
                  data.map((element, groupIndx) => {
                    const { values: { sex, ...rest } } = this.props;

                    if (element.type === 'input') {
                      return (
                        element.inputs.map((elem, indx) => {
                          const { id, label, expanded, limits, unit, ifLess, ifMore } = elem;

                          if (!rest[id]) {
                            return null;
                          }

                          return (
                            <List.Accordion
                              key={id}
                              title={label}
                              left={props => this._getInputIcon(props, id, limits)}
                              expanded={expanded}
                              onPress={this.handleInputPress(groupIndx, indx)}
                            >
                              <Separator />
                              <Card style={{ paddingLeft: 0 }}>
                                <S.Container>
                                  <Title>
                                    {this._getInputLabel(id, limits, label)}
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
                              <Separator />
                            </List.Accordion>
                          );
                        })
                      );
                    }

                    if (element.type === 'radio') {
                      const { id, value, label, expanded } = element;

                      if (!rest[value]) {
                        return null;
                      }

                      return (
                        <List.Accordion
                          key={id}
                          title={label}
                          left={props => this._getRadioIcon(props, value, element.reference)}
                          expanded={expanded}
                          onPress={this.handleRadioPress(groupIndx)}
                        >
                          <Separator />
                          <Card style={{ paddingLeft: 0 }}>
                            <S.Container>
                              <Title>
                                {this._getRadioLabel(value, element.reference, label)}
                              </Title>
                            </S.Container>
                            <Divider />
                            <S.Container>
                              <Paragraph>
                                {`Референсное значение: \n ${element.inputs
                                  .filter(({ value }) => value === element.reference)[0].label}`}
                              </Paragraph>
                            </S.Container>
                            <S.Container>
                              <Paragraph>
                                {`Ваш результат: \n ${element.inputs
                                  .filter(elem => elem.value === rest[value])[0].label}`}
                              </Paragraph>
                            </S.Container>
                            <Divider />
                            <S.Container>
                              <Paragraph>
                                {element.inputs.filter(elem => elem.value === rest[value])[0].info}
                              </Paragraph>
                            </S.Container>
                          </Card>
                        </List.Accordion>
                      );
                    }

                    return null;
                  })
                }
              </List.Section>

              <PaperDialog.Content>
                <Paragraph>
                  Результаты расшифровки анализов носят только информационный характер,
                  не являются диагнозом и не заменяют очную консультацию врача.
                </Paragraph>
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
