import styled from 'styled-components/native';

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.mono.dark};
  fontSize: 14;
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

export const Input = styled.TextInput`
  margin: 15px;
  height: 40px
  width: 200px;
  borderColor: #7a42f4;
  borderWidth: 1;
  borderRadius: 5px;
`;

export const Item = styled.TouchableOpacity`
  height: 25%;
  width: 30.3%;
  borderRadius: 10;
  justifyContent: center;
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
