import styled from 'styled-components';
import { Card } from 'react-native-paper';

export const Container = styled(Card)`
  marginBottom: 15px;
`;

export const Header = styled.View`
  display: flex;
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
  padding: 20px;
  width: 100%;
`;

export const Wrapper = styled.View`
  display: flex;
  height: 100%;
  justifyContent: space-around;
`;
