import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IStatusCardProps {
  status: 'em_validação' | 'aprovado' | 'recusado';
}

type tplotOptions = {
  [key: string]: any
}

const bgCardVariations: tplotOptions  = {
  aprovado: css`
    background: ${props => props.theme.colors.success};
  `,
  em_validação: css`
    background:  ${props => props.theme.colors.warning};
  `,
  recusado: css`
    background:  ${props => props.theme.colors.error};
  `,
}

export const Container = styled.View<IStatusCardProps>`
  padding: 5px 8px;
  border-radius: 5px;
  ${props => bgCardVariations[props.status]};
`;

export const StatusSpan = styled.Text`
  color: #fff;
  font-size: ${RFValue(8)}px;
  color: ${props => props.theme.colors.shape};
  font-family: ${props => props.theme.fonts.medium};
`;
