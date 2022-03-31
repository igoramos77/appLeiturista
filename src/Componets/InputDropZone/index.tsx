import React from 'react';

import { Container, Title, Icon } from './styles';

interface IInputDropZoneProps {
  onPress?(): void;
  icon?: string;
  title?: string;
}

const InputDropZone: React.FC<IInputDropZoneProps> = ({onPress, icon, title, children}) => {
  
  return (
    <Container onPress={onPress}>
      {
        children ? 
          children 
        :
        <>
          <Icon name={icon ? icon : 'camera'} />
          <Title>{title ? title : 'Anexar foto'}</Title>
        </>
      }   
    </Container>
  );
}

export default InputDropZone;