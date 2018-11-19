import styled from 'styled-components/native';

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.mono.dark};
  fontSize: 16;
`;

export const BoldText = styled.Text`
  color: ${({ theme }) => theme.mono.dark};
  fontSize: 18;
`;

export const Header = styled.Text`
  color: ${({ theme }) => theme.mono.dark};
  fontSize: 18;
  fontWeight: bold;
`;

export const Container = styled.View`
  display: flex;
  justifyContent: flex-start;
  backgroundColor: rgb(245, 245, 245);
  height: 100%;
  marginTop: 5;
  marginLeft: 5;
  marginRight: 5;
  marginBottom: 5;
  paddingTop: 10;
  paddingLeft: 10;
  paddingRight: 10;
  paddingBottom: 10;
`;

export const Wrapp = styled.View`
  backgroundColor: rgb(255, 255, 255);
  marginBottom: 5;
  paddingTop: 10;
  paddingLeft: 10;
  paddingRight: 10;
  paddingBottom: 10;
  borderRadius: 5;
`;

export const DrugName = styled.Text``;

export const Manauf = styled.Text``;

export const Web = styled.Text``;

export const SideEff = styled.Text``;

export const Dosage = styled.Text``;

export const Contraindications = styled.Text``;

export const Composition = styled.Text``;

export const ForUse = styled.Text``;
