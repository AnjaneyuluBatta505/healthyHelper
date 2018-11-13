import styled from 'styled-components/native';

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.mono.dark};
  fontSize: 14;
`;

export const StyledInput = styled.TextInput`
  width: 200;
  height: 40;
  borderRadius: 10;
  borderWidth: 2;
  borderColor: ${({ theme }) => theme.mono.dark};
  paddingLeft: 5;
`;

export const InputContainer = styled.View`
  flex: 1;
  flexDirection: row;
  justifyContent: center;
  marginBottom: 15;
`;

export const Container = styled.View`
  flex: 1;
  alignItems: flex-start;
  backgroundColor: #F5FCFF;
  marginTop: 5;
  marginLeft: 5;
  marginRight: 5;
  marginBottom: 5;
  paddingTop: 5;
  paddingLeft: 5;
  paddingRight: 5;
  paddingBottom: 5;
`;

export const StyledItemOfList = styled.View`
  flex: 1;
  flexDirection: row;
  height: 50;
  justifyContent: center;
  backgroundColor: gray;
  marginBottom: 5;
`;
