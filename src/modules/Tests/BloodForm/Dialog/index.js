import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Paragraph, Dialog as PaperDialog, Portal, List, Card, Title, Divider } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import update from 'immutability-helper';

import { Indicators, LEUKOCYTE_FORMULA } from '../config';
import { Separator } from '../../../../helpers/layout/List';
import * as S from './styled';

const IconNames = {
  up: 'long-arrow-pointing-up',
  down: 'down-arrow',
  normal: 'correct-symbol',
};

class Dialog extends Component {
  state = {
    data: Indicators.map(el => ({ ...el, expanded: false })),
    leukForm: LEUKOCYTE_FORMULA,
  }

  handlePress = indx => () => this.setState(({ data }) => ({
    data: update(data, { [indx]: { expanded: { $set: !data[indx].expanded } } }),
  }))

  _getLabel = (id, limits, label) => {
    const { values } = this.props;
    const { sex } = values;
    const res = values[id];

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
      return <S.TitleIcon {...props} color="red" name={IconNames.down} size={20} />;
    }

    if (values[label] > limits[sex].maxLimit) {
      return <S.TitleIcon {...props} color="red" name={IconNames.up} size={20} />;
    }

    return <S.TitleIcon {...props} color="green" name={IconNames.normal} size={20} />;
  }

  _getLeukIcon = (label, limits) => {
    const { values } = this.props;
    const { sex } = values;

    if (values[label] < limits[sex].minLimit) {
      return <S.LeukIcon color="red" name={IconNames.down} size={10} />;
    }

    if (values[label] > limits[sex].maxLimit) {
      return <S.LeukIcon color="red" name={IconNames.up} size={10} />;
    }

    return <S.LeukIcon color="green" name={IconNames.normal} size={10} />;
  }

  _getLeukDescription = (label, limits, less, more) => {
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
    const { isVisible, hideDialog, values: { sex, ...rest } } = this.props;
    const { data, leukForm } = this.state;

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

                    if (!rest[id]) {
                      return null;
                    }

                    return (
                      <Fragment key={id}>
                        <List.Accordion
                          title={label}
                          left={props => this._getIcon(props, id, limits)}
                          expanded={expanded}
                          onPress={this.handlePress(indx)}
                        >
                          <Separator />
                          <Card style={{ paddingLeft: 0 }}>
                            <S.Container>
                              <Title>
                                {this._getLabel(id, limits, label)}
                              </Title>
                            </S.Container>
                            <Divider />
                            <S.Container>
                              <Paragraph>
                              Референсные значения:
                              </Paragraph>
                              <Paragraph>
                                {limits[sex].minLimit} - {limits[sex].maxLimit}{unit}
                              </Paragraph>
                            </S.Container>
                            <S.Container>
                              <Paragraph>
                              Результат:
                              </Paragraph>
                              <Paragraph>
                                {rest[id]}{unit}
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
                <List.Accordion
                  title={leukForm.title}
                  style={{ paddingLeft: 0 }}
                  expanded={leukForm.expanded}
                  onPress={() => this.setState(({ leukForm }) => ({
                    leukForm: update(leukForm, { expanded: { $set: !leukForm.expanded } }),
                  }))}
                >
                  {
                    leukForm.arguments.map(elem => (
                      rest[elem.id] && (
                      <Card key={elem.id} style={{ paddingLeft: 0 }}>
                        <Separator />
                        <S.Container>
                          <Paragraph>
                          Референсные значения
                          </Paragraph>
                        </S.Container>
                        <S.Container>
                          <Paragraph>
                            {elem.label}
                          </Paragraph>
                          <Paragraph>
                            {elem.limits[sex].minLimit} - {elem.limits[sex].maxLimit} {elem.unit}
                          </Paragraph>
                        </S.Container>
                        <Divider />
                        <S.Container>
                          <Paragraph>
                          Результат: {this._getLeukIcon(elem.id, elem.limits)}
                          </Paragraph>
                          <Paragraph>
                            {rest[elem.id]} {elem.unit}
                          </Paragraph>
                        </S.Container>
                        <Divider />
                        <Card.Content>
                          <Paragraph>
                            {this._getLeukDescription(elem.id, elem.limits, elem.ifLess, elem.ifMore)}
                          </Paragraph>
                        </Card.Content>
                      </Card>
                      )
                    ))
                  }
                </List.Accordion>
                <Separator />
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
