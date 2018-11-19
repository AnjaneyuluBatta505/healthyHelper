import styled from 'styled-components/native';

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.mono.dark};
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
  marginTop: 5;
  marginLeft: 5;
  marginRight: 5;
  marginBottom: 5;
  paddingTop: 5;
  paddingLeft: 5;
  paddingRight: 5;
  paddingBottom: 5;
`;

export const Item = styled.TouchableOpacity`
  display: flex;
  justifyContent: center;
  backgroundColor: rgb(245, 245, 245);
  height: 25%;
  width: 30.3%;
  borderRadius: 10;
  borderWidth: 2;
  borderColor: ${({ theme }) => theme.primary};
  marginTop: 5;
  marginLeft: 5;
  marginRight: 5;
  marginBottom: 5;
  paddingTop: 5;
  paddingLeft: 5;
  paddingRight: 5;
  paddingBottom: 5;
`;
