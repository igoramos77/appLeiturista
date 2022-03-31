import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #E5E5E5;
  height: 100%;
`;

export const Header = styled(LinearGradient)`
  width: 100%;
  height: ${RFPercentage(40)}px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const H1 = styled.Text`
  font-size: 26px;
  color: #fff;
  font-family: ${props => props.theme.fonts.bold};
`;

export const H2 = styled.Text`
  color: #fff;
  font-size: 11px;
  margin-bottom: 120px;
`;

export const Strong = styled.Text`
  color: #fff;
  font-family: ${props => props.theme.fonts.bold};
`;

export const FormControl = styled.View`
  margin: ${RFValue(6)}px 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BigContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(-120)}px;
`;

export const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 88%;
  padding: 0 16px 16px 16px;
  background: #fff;
  border-radius: 5px;
`;

export const BigAvatar = styled.Image`
  margin-top: ${RFValue(-50)}px; 
  margin-bottom: ${RFValue(10)}px; 
  width: ${RFValue(220)}px;
  height: ${RFValue(150)}px;
  border-radius: 10px;
`;

export const Form = styled.View`
  position: relative;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #969CB2;
  margin: 4px 8px 8px 8px;
`;

export const Footer = styled.Text`
  font-size: 10px;
  color: ${props => props.theme.colors.text}90;
  display: flex;
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;