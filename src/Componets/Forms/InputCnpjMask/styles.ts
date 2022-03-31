import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IInputProps extends TextInputProps {
  disabled?: boolean;
}

export const Container = styled(TextInput)<IInputProps>`
  width: 100%;
  padding: 20px 16px;
  font-size: ${RFValue(12)}px;
  background: ${props => props.disabled ? '#D8D9DB' : props.theme.colors.shape};
  color: ${props => props.theme.colors.title};
  font-family: ${props => props.theme.fonts.regular};
  border-radius: 5px;
`;
