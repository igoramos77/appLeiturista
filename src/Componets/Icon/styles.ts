import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IIConProps {
  background?: string;
  color?: string;
  size?: number;
  name?: string;
  padding?: number;
}

export const Container = styled.View<IIConProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.background ? props.background : props.theme.colors.shape};
  padding: ${props => props.padding ? Number(props.padding) : '5px'};
`;

export const IconSpan = styled(Feather)<IIConProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color ? props.color : props.theme.colors.title};
`;
