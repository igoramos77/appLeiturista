import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface IHighlightCardProps {
  background: string;
}

export const Container = styled.View`
  position: relative;
  background: ${props => props.theme.colors.shape};
  border-radius: 5px;
  padding: 19px 23px 23px 23px;
  margin-right: 16px;
`;

export const Header = styled.View`
  position: relative;
  display: flex;
`;

export const HeaderIntro = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  width: ${RFValue(110)}px;
  font-size: ${RFValue(11)}px;
  color: ${props => props.theme.colors.subtitle};
  font-family: ${props => props.theme.fonts.medium};
`;

export const IconContainer = styled.View<IHighlightCardProps>`
  color: ${props => props.theme.colors.warning};
  font-size: ${RFValue(20)}px;
  background: ${props => props.background && props.background};
  padding: 14px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
`;

export const Icon = styled(Feather)`
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(20)}px;
`;

export const Value = styled.Text`
  font-size: ${RFValue(46)}px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.title};
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 20px;
`;

export const Total = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.title};
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 20px;
`;