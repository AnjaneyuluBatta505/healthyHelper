import React, { PureComponent, Fragment } from 'react';
import { ScrollView, View } from 'react-native';
import { Headline, Card, Title, IconButton } from 'react-native-paper';
import { Form, Field } from 'react-final-form';

import Dialog from './Dialog';
import { validate } from './validate';
import { Indicators } from './config';
import * as S from './styled';

const MAX_PAGE_COUNT = 3;
const MIN_PAGE_COUNT = 0;

class UrineForm extends PureComponent {
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
      <ScrollView>
        <S.Wrapper>
          <Headline style={{ textAlign: 'center' }}>{Indicators[page].label}</Headline>
          <Form
            onSubmit={this.onSubmit}
            validate={validate}
            subscription={{ handleSubmit: true, values: true }}
            render={({ handleSubmit, values }) => (
              <S.FormContainer>
                {
                  Indicators[page].indicators.map(elem => (
                    <S.CardContainer key={`${elem.id}${elem.value}`}>
                      <Card.Content>
                        {
                          elem.label ? <Title>{elem.label}</Title> : null
                        }
                        {
                          elem.inputs.map(({ id, type, value, unit, label }) => {
                            if (type === 'input') {
                              return (
                                <S.InputWrapper key={`${id}${value}`}>
                                  <Field name={id}>
                                    {({ input, meta: { error, touched } }) => (
                                      <Fragment>
                                        <S.Input
                                          {...input}
                                          label={label}
                                          error={error && touched}
                                        />
                                        <S.UnitText
                                          type={(error && touched) ? 'error' : 'info'}
                                          visible="true"
                                        >
                                          {
                                            ((error && touched) && error) || unit
                                          }
                                        </S.UnitText>
                                      </Fragment>
                                    )}
                                  </Field>
                                </S.InputWrapper>
                              );
                            }

                            return (
                              <Field key={`${id}${value}`} name={`${elem.value}`} value={value} type="radio">
                                {({ input: { onChange, ...rest }, meta: { error, touched } }) => (
                                  <View>
                                    <S.RadioWrap>
                                      <S.RaioLabel>{label}</S.RaioLabel>
                                      <S.RadioBtn
                                        {...rest}
                                        color="#6200ee"
                                        status={values[elem.value] === value ? 'checked' : 'unchecked'}
                                        onPress={() => onChange(value)}
                                      />
                                    </S.RadioWrap>
                                    {
                                      error && touched && (
                                        <S.UnitText
                                          type="error"
                                          visible="true"
                                        >
                                          {error}
                                        </S.UnitText>
                                      )
                                    }
                                  </View>
                                )}
                              </Field>
                            );
                          })
                        }
                      </Card.Content>
                    </S.CardContainer>
                  ))
                }
                {
                  page === MAX_PAGE_COUNT ? (
                    <S.SButton
                      type="submit"
                      icon="search"
                      mode="contained"
                      onPress={handleSubmit}
                    >
                      Проверить
                    </S.SButton>
                  )
                    : null
                }
              </S.FormContainer>
            )}
          />
          <S.BtnWrapper>
            <IconButton
              disabled={page === MIN_PAGE_COUNT}
              icon="navigate-before"
              size={80}
              style={{ height: 80, width: 80 }}
              onPress={this.goBack()}
            />
            <Headline style={{ textAlign: 'center' }}>{page + 1}/{MAX_PAGE_COUNT + 1}</Headline>
            <IconButton
              disabled={page === MAX_PAGE_COUNT}
              icon="navigate-next"
              size={80}
              style={{ height: 80, width: 80 }}
              onPress={this.goForward()}
            />

          </S.BtnWrapper>
        </S.Wrapper>
        {
          isVisible && (
            <Dialog
              isVisible={isVisible}
              hideDialog={this.hideDialog}
              values={values}
            />
          )
        }
      </ScrollView>
    );
  }
}

export default UrineForm;
