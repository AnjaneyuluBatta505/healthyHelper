import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: palevioletred;
`;

const Conntainer = styled.View`
  flex: 1;
  backgroundColor: #F5FCFF;
`;


const App = () => (
  <Conntainer>
    <StyledText>Hello World!</StyledText>
  </Conntainer>
);

export default App;
