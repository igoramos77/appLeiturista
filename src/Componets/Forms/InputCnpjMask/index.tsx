import React, { useState } from 'react';
import { Alert, TextInputProps } from 'react-native';

import { Container } from './styles';

import cnpjMask from '../../../utils/cnpjMask';

interface IInputProps extends TextInputProps {
  disabled?: boolean;
  maskCnpj?: boolean;
  setCnpjValue(value: any): void;
  setCnpjIsFull(value: boolean): void;
}

const InputCnpjMask: React.FC<IInputProps> = ({disabled, maskCnpj, setCnpjValue, setCnpjIsFull, ...rest}) => {
  //const [cnpjIsFull, setCnpjIsFull] = useState(false);

  return (
    <Container
      {...rest} 
      disabled={disabled}
      placeholderTextColor="#c3c3c3"
      onChangeText={(value) => {
        setCnpjValue(cnpjMask(value));
        if(value.length === 18) {
          setCnpjIsFull(true);
        }
      }}
    />
  );
}

export default InputCnpjMask;