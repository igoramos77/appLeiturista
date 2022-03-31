import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background: ${props => props.theme.colors.background};
  background: #EDEDED;
  height: 100%;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;

export const Form = styled.View`
  flex: 1;
  height: 100%;
  padding: 0 24px;
  margin: 24px 0;
  justify-content: space-between;
`;

export const FormControl = styled.View`
  margin: ${RFValue(4)}px 0;
  display: flex;
  justify-content: center;
`;

export const Fields = styled.View`

`;


export const CloseModalButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: ${RFValue(72)}px;
  z-index: 999999;
  font-size: ${RFValue(30)}px;
  height: 32px;
  width: 32px;
  display: flex;
  background: #ffffff30;
  border-radius: ${RFPercentage(50)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CloseText = styled.Text`
  color: #fff;
`;

export const Header = styled(LinearGradient)`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  color: #ffffff;
`;

export const TitleHeader = styled.Text`
  display: flex;
  text-align: center;
  width: 100%;
  color: #fff;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(16)}px;
`;

export const ImageCertificate = styled.Image`
  transform: rotate(-90deg);
  width: 160;
  height: 350;
  border-radius: 5px;
`;

