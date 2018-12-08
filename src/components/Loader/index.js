import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as S from './styled';

const Loader = () => (
  <S.Container>
    <ActivityIndicator size="large" color="#0000ff" />
  </S.Container>
);

export default Loader;
