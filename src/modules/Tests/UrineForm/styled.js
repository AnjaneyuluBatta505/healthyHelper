import styled from 'styled-components/native';
import { TextInput, HelperText, Button, RadioButton, Card } from 'react-native-paper';

export const RadioBtn = styled(RadioButton)``;

export const Input = styled(TextInput)`
  width: 100%;
`;

export const UnitText = styled(HelperText)`
  width: 100%;
`;

export const Container = styled.View`
  display: flex;
  flexDirection: row;
  flexWrap: wrap;
  justifyContent: space-between;
  alignItems: center;
  margin: 5px;
  padding: 10px;
  paddingTop: 20px;
`;

export const InputWrapper = styled.View`
  display: flex;
  flexDirection: column;
  width: 100%;
  justifyContent: center;
`;

export const SButton = styled(Button)`
  width: 70%;
  marginTop: 40px;
`;

export const RadioWrap = styled.View`
  display: flex;
  alignItems: center;
  flexDirection: row;
  justifyContent: space-between;
  width: 75%;
`;

export const Wrapper = styled.View`
  display: flex;
  alignItems: center;
  backgroundColor: ${({ theme }) => theme.colors.background};
  height: 100%;
`;

export const CardContainer = styled(Card)`
  marginBottom: 5px;
  width: 90%;
`;

export const FormContainer = styled.View`
  display: flex;
  alignItems: center;
  width: 95%;
  justifyContent: center;
`;

export const BtnWrapper = styled.View`
  display: flex;
  alignItems: center;
  flexDirection: row;
  justifyContent: space-between;
  marginTop: 20px;
`;
