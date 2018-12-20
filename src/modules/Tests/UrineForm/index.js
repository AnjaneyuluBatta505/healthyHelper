import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { Text, Headline, Card, Title, IconButton } from 'react-native-paper';
import { Form, Field } from 'react-final-form';

// import Dialog from './Dialog';
import { validate } from './validate';
import { Indicators } from './config';
import * as S from './styled';

class UrineForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = () => ({ title: 'Анализ мочи общий' });

  state = { isVisible: false, values: {}, page: 0 }

  goForward = () => () => this.setState(({ page }) => ({ page: page + 1 }))

  goBack = () => () => this.setState(({ page }) => ({ page: page - 1 }))

  _showDialog = () => this.setState({ isVisible: true });

  hideDialog = () => this.setState({ isVisible: false });

  onSubmit = values => this.setState({ values }, this._showDialog())


  render() {
    const { isVisible, values, page } = this.state;

    return (
      <S.Wrapper>
        <ScrollView>
          <Headline>{Indicators[page].label}</Headline>
          <Form
            onSubmit={this.onSubmit}
            validate={validate}
            subscription={{ handleSubmit: true, pristine: true, invalid: true, values: true }}
            render={({ handleSubmit, pristine, invalid, values }) => (
              <S.FormContainer>
                {
                  Indicators[page].indicators.map((elem) => {
                    return (
                      <S.CardContainer key={`${elem.id}${elem.value}`}>
                        <Card.Content>
                          <Title>{elem.label}</Title>
                          {
                            elem.inputs.map((el, i) => {
                              if (el.type === 'input') {
                                return (
                                  <S.InputWrapper key={`${el.id}${el.value}`}>
                                    <Field name={el.id}>
                                      {({ input, meta: { error, touched } }) => (
                                        <Fragment>
                                          <S.Input
                                            {...input}
                                            label={el.label}
                                            error={error && touched}
                                          />
                                          <S.UnitText
                                            type={(error && touched) ? 'error' : 'info'}
                                            visible="true"
                                          >
                                            {
                                              ((error && touched) && error) || el.unit
                                            }
                                          </S.UnitText>
                                        </Fragment>
                                      )}
                                    </Field>
                                  </S.InputWrapper>
                                );
                              }

                              return (
                                <Field key={`${el.id}${el.value}`} name={`${elem.value}`} value={el.value} type="radio">
                                  {({ input }) => (
                                    <S.RadioWrap>
                                      <Text>{i}. {el.label}</Text>
                                      <S.RadioBtn
                                        {...input}
                                        color="#6200ee"
                                        status={values[elem.value] === el.value ? 'checked' : 'unchecked'}
                                        onPress={() => input.onChange(el.value)}
                                      />
                                    </S.RadioWrap>
                                  )}
                                </Field>
                              );
                            })
                          }
                        </Card.Content>
                      </S.CardContainer>
                    );
                  })
                }
              </S.FormContainer>
            )}
          />
          <S.BtnWrapper>
            <IconButton
              icon="navigate-before"
              size={80}
              style={{ height: 80, width: 80 }}
              onPress={this.goBack()}
            />
            <IconButton
              icon="navigate-next"
              size={80}
              style={{ height: 80, width: 80 }}
              onPress={this.goForward()}
            />

          </S.BtnWrapper>
        </ScrollView>
      </S.Wrapper>
    );
  }
}

export default UrineForm;
