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
  paddingLeft: 15;
`;

export const InputContainer = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: center;
  marginBottom: 15;
`;

export const Container = styled.View`
  display: flex;
  alignItems: center;
  justifyContent: center;
  backgroundColor: rgb(245, 245, 245);
  height: 100%;
  marginTop: 5;
  marginLeft: 5;
  marginRight: 5;
  marginBottom: 5;
  paddingTop: 5;
  paddingLeft: 5;
  paddingRight: 5;
  paddingBottom: 5;
`;

export const StyledItemOfList = styled.TouchableOpacity`
  display: flex;
  flexDirection: row;
  alignItems: center;
  height: 50;
  width: 100%;
  borderWidth: 2;
  borderColor: ${({ theme }) => theme.primary};
  justifyContent: center;
  backgroundColor: white;
  marginBottom: 5;
  borderRadius: 15;
`;
