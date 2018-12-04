import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Btn = styled.Text`
  textDecorationLine: underline;
  fontSize: 16;
  color: blue;
`;

export const StyledText = styled.Text`
  fontSize: 16;
  color: gray;
`;

export const BoldText = styled.Text`
  color: ${({ theme }) => theme.miTheme.mono.dark};
  fontSize: 18;
`;

export const Header = styled.Text`
  color: ${({ theme }) => theme.miTheme.mono.dark};
  fontSize: 18;
  fontWeight: bold;
`;

export const Container = styled.View`
  display: flex;
  justifyContent: flex-start;
  backgroundColor: rgb(245, 245, 245);
  height: 100%;
  margin: 5px;
  padding: 5px;
`;

export const Wrapp = styled(Card)`
  marginBottom: 5px;
`;
