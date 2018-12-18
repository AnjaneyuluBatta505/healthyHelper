import styled from 'styled-components/native';
import { TextInput, HelperText, Button, RadioButton } from 'react-native-paper';

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
  width: 45%;
  justifyContent: center;
`;

export const SButton = styled(Button)`
  width: 70%;
  marginTop: 40px;
`;

export const Wrapper = styled.View`
  display: flex;
  alignItems: center;
  backgroundColor: ${({ theme }) => theme.colors.background};
  height: 100%;
`;
