import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

interface IInputProps extends TextInputProps {
  disabled?: boolean;
  disabledd?: boolean;
  background?: string;
}

const Input: React.FC<IInputProps> = ({disabled, disabledd, background, ...rest}) => {

  return (
    <Container
      {...rest} 
      disabled={disabled}
      disabledd={disabledd}
      background={background}
      placeholderTextColor="#c3c3c3"
    />
  );
}

export default Input;