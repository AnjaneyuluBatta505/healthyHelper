import styled from 'styled-components/native';

export const Label = styled.Text`
  color: ${({ theme }) => theme.mono.dark};
  fontSize: 14;
  textAlign: center;
  width: 100px;
`;

export const BtnText = styled.Text`
  color: ${({ theme }) => theme.mono.white};
  fontSize: 14;
  textAlign: center;
`;

export const Container = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  backgroundColor: #FFF;
  justifyContent: flex-start;
  alignItems: center;
  margin: 5px;
  padding: 5px;
`;

export const Input = styled.TextInput`
  margin: 10px;
  marginRight: 0px;
  height: 40px
  width: 200px;
  borderColor: #7a42f4;
  borderWidth: 1;
  borderRadius: 5px;
  padding: 10px;
`;

export const InputWrapper = styled.View`
  display: flex;
  flexDirection: row;
  width: 100%;
  alignItems: center;
  justifyContent: flex-start;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 250px;
  backgroundColor: #7a42f4;
  justifyContent: center;
  borderRadius: 10px;
  marginTop: 40px;
  padding: 5px;
`;
