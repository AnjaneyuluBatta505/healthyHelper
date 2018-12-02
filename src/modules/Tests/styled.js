import styled from 'styled-components/native';
import { List } from 'react-native-paper';

import CustomIcon from '../../components/CustomIcon.js';

export const TitleIcon = styled(CustomIcon)`
  display: flex;
  alignItems: center;
  justifyContent: center;
  height: 40px;
  width: 40px;
  marginRight: 20px;
  marginLeft: 10px;
`;

export const ItemIcon = styled(CustomIcon)`
  display: flex;
  textAlign: center;
  alignItems: center;
  justifyContent: center;
  marginRight: 20px;
  marginLeft: 10px;
  height: 35px;
  width: 35px;
`;

export const Separator = styled.View`
  borderBottomColor: #bbb;
  borderBottomWidth: 1px;
`;

export const ListItem = styled(List.Item)`
  display: flex;
  alignItems: center;
  justifyContent: center;
`;
