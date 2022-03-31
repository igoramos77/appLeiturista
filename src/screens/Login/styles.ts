import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #2A4069;
  height: 100%;
`;

export const Header = styled(LinearGradient)`
  width: 100%;
  height: ${RFPercentage(55)}px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const TitleContent = styled.View`
  margin-top: ${RFValue(60)}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const H1 = styled.Text`
  font-size: 24px;
  text-align: center;
  color: #fff;
  font-family: ${props => props.theme.fonts.bold};
`;

export const Form = styled.View`
  padding: 4px 24px;
  margin-top: ${RFValue(-25)}px;
`;

export const FormControl = styled.View`
  margin: ${RFValue(6)}px 0;
  display: flex;
  justify-content: center;
`;

export const Footer = styled.Text`
  font-size: 10px;
  color: #ffffff50;
  display: flex;
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;
