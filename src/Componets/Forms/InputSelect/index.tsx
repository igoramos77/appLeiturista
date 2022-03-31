import React, { useState } from 'react';

import { Container, Category, Icon } from './styles';

interface ISelectProps {
  title: string;
  onPress(): void;
}

const InputSelect: React.FC<ISelectProps> = ({title, onPress}) => {

  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}

export default InputSelect;