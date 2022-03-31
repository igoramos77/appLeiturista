import React from 'react';

import { Container, IconSpan } from './styles';

interface IIConProps {
  background?: string;
  color: string;
  size: number;
  name: string;
  padding?: number;
}

const Icon: React.FC<IIConProps> = ({ background, color, size, name, padding }) => {
  return (
    <Container background={background} padding={padding}>
      <IconSpan name={name} size={size} color={color} />
    </Container>
  );
}

export default Icon;