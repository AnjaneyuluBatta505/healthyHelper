import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

import CustomIcon from '../../../../components/CustomIcon.js';

export const TitleIcon = styled(CustomIcon)`
  display: flex;
  alignItems: center;
  justifyContent: center;
  marginTop: 10px;
  height: 20px;
  width: 20px;
`;

export const Container = styled(Card.Content)`
  display: flex;
  alignItems: flex-end;
  flexDirection: row;
  justifyContent: space-between;
`;
