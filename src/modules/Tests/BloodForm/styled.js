import styled from 'styled-components/native';
import { TextInput, HelperText, Button  } from 'react-native-paper';

export const Input = styled(TextInput)`
  marginRight: 0px;
  width: 100%;
`;

export const UnitText = styled(HelperText)`
  width: 100%;
`;

export const Container = styled.View`
  display: flex;
  flexDirection: row;
  flexWrap: wrap;
  height: 100%;
  width: 100%;
  justifyContent: space-around;
  alignItems: center;
  margin: 5px;
  padding: 5px;
  paddingTop: 20px;
`;

export const InputWrapper = styled.View`
  display: flex;
  flexDirection: column;
  width: 45%;
  justifyContent: flex-start;
`;

export const SButton = styled(Button)`
  width: 70%;
  marginTop: 40px;
`;

export const Wrapper = styled.View`
  display: flex;
  justifyContent: center;
  height: 100%;
  width: 100%;
  backgroundColor: ${({ theme }) => theme.colors.background};
`;
