import styled, { css } from 'styled-components/native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IButtonProps extends TouchableOpacityProps {
  background: 'warning' | 'error' | 'primary' | 'success' | 'outline';
}

type options = {
  [key: string]: any;
}

const bgVariations: options  = {
  primary: css`
    background: ${props => props.theme.colors.primary};
  `,
  warning: css`
    background:  ${props => props.theme.colors.warning};
  `,
  success: css`
    background:  ${props => props.theme.colors.success};
  `,
  error: css`
    background:  ${props => props.theme.colors.error};
  `,
}

export const Container = styled(TouchableOpacity)<IButtonProps>`
  padding: 20px 16px;
  ${props => bgVariations[props.background]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Text = styled.Text`
  color: ${props => props.theme.colors.shape};
  font-family: ${props => props.theme.fonts.medium};
  font-size: ${RFValue(12)}px;
`;
