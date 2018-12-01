import styled from 'styled-components/native';

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.miTheme.mono.dark};
  fontSize: 16;
  textAlign: center;
`;

export const Container = styled.View`
  display: flex;
  flexWrap: wrap;
  height: 100%;
  flexDirection: row;
  backgroundColor: #F5FCFF;
  justifyContent: flex-start;
  margin: 5px;
  padding: 5px;
`;

export const Item = styled.TouchableOpacity`
  display: flex;
  justifyContent: center;
  backgroundColor: rgb(245, 245, 245);
  height: 25%;
  width: 30.3%;
  borderRadius: 10;
  borderWidth: 2;
  borderColor: ${({ theme }) => theme.miTheme.primary};
  margin: 5px;
  padding: 5px;
`;
