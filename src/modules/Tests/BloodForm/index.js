import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { Form, Field } from 'react-final-form';

import Dialog from './Dialog';
import { validate } from './validate';
import { Indicators } from './config';
import * as S from './styled';

class BloodForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = () => ({ title: 'Анализ Крови' });

  state = { isVisible: false }

  _showDialog = () => this.setState({ isVisible: true });

  _hideDialog = () => this.setState({ isVisible: false });

  onSubmit = (values) => {
    this._showDialog({ values });
  }


  render() {
    const { isVisible } = this.state;

    return (
      <S.Wrapper>
        <ScrollView>
          <Dialog
            isVisible={isVisible}
            hideDialog={this._hideDialog}
          />
          <S.Wrapper>
            <View>
              <Form
                onSubmit={this.onSubmit}
                validate={validate}
                subscription={{ handleSubmit: true, pristine: true, invalid: true, values: true }}
                render={({ handleSubmit, pristine, invalid, values }) => (
                  <S.Container>
                    {
                      Indicators.map((el) => {
                        const { unit, label, id } = el;

                        return (
                          <S.InputWrapper key={id}>
                            <Field name={id}>
                              {({ input, meta }) => (
                                <Fragment>
                                  <S.Input
                                    {...input}
                                    label={label}
                                    error={meta && meta.error}
                                  />
                                  <S.UnitText
                                    type={(meta && meta.error) ? 'error' : 'info'}
                                    visible="true"
                                  >
                                    {
                                      (meta && meta.error) || unit
                                    }
                                  </S.UnitText>
                                </Fragment>
                              )}
                            </Field>
                          </S.InputWrapper>
                        );
                      })
                    }
                    <Field name="sex" value="man" type="radio">
                      {({ input }) => (
                        <S.RadioWrap>
                          <Text>М</Text>
                          <S.RadioBtn
                            {...input}
                            color="#6200ee"
                            status={values.sex === 'man' ? 'checked' : 'unchecked'}
                            onPress={() => input.onChange('man')}
                          />
                        </S.RadioWrap>
                      )}
                    </Field>
                    <Field name="sex" value="woman" type="radio">
                      {({ input }) => (
                        <S.RadioWrap>
                          <Text>Ж</Text>
                          <S.RadioBtn
                            {...input}
                            color="#6200ee"
                            status={values.sex === 'woman' ? 'checked' : 'unchecked'}
                            onPress={() => input.onChange('woman')}
                          />
                        </S.RadioWrap>
                      )}
                    </Field>
                    <S.SButton
                      type="submit"
                      icon="search"
                      mode="contained"
                      disabled={pristine || invalid}
                      onPress={handleSubmit}
                    >
                    Проверить
                    </S.SButton>
                  </S.Container>
                )}
              />
            </View>
          </S.Wrapper>
        </ScrollView>
      </S.Wrapper>
    );
  }
}

export default BloodForm;
