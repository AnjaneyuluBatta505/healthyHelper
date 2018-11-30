import styled from 'styled-components/native';

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.miTheme.mono.dark};
  fontSize: 14;
  textAlign: center;
`;

export const Container = styled.View`
  flex: 1;
  flexWrap: wrap;
  height: 100;
  flexDirection: row;
  backgroundColor: #F5FCFF;
  justifyContent: flex-start;
  margin: 5px;
  padding: 5px;
`;

export const Item = styled.TouchableOpacity`
  height: 25%;
  width: 30.3%;
  borderRadius: 10;
  borderWidth: 2;
  borderColor: ${({ theme }) => theme.miTheme.primary};
  margin: 5px;
  padding: 5px;
`;
