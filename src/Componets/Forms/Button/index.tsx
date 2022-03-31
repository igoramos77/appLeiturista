import { isLoading } from 'expo-font';
import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import Feather from '@expo/vector-icons/build/Feather';

import { Container, Text } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  background: 'warning' | 'error' | 'primary' | 'success' | 'outline';
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = ({title, background, loading, ...rest}) => {
  return (
    <Container background={background} {...rest}>
      {loading ? 
        <ActivityIndicator size="small" color="#fff" />
        :
        <Text>{title}</Text>
      }
    </Container>
  );
}

export default Button;