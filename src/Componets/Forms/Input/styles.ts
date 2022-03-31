import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IInputProps extends TextInputProps {
  disabledd?: boolean;
  disabled?: boolean;
  background?: string;
}

export const Container = styled(TextInput)<IInputProps>`
  width: 100%;
  padding: 20px 16px;
  font-size: ${RFValue(12)}px;
  background: ${props => props.disabledd ? '#E5E5E5' : props.theme.colors.shape};
  color: ${props => props.disabledd ? '#969CB2' : props.theme.colors.text};
  font-family: ${props => props.theme.fonts.regular};
  border-radius: 5px;
`;
