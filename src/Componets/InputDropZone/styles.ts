import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  width: 100%;
  padding: 0 8px;
  height: ${RFValue(150)}px;
  border-radius: 5px;
  border: 2px dashed ${props => props.theme.colors.subtitle};
`;

export const Title = styled.Text`
  display: flex;
  text-align: center;
  width: 100%;
  color: ${props => props.theme.colors.title};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(12)}px;
`;

export const Icon = styled(Feather)`
  color: ${props => props.theme.colors.title};
  font-size: ${RFValue(30)}px;
  margin-bottom: 10px;
  display: flex;
`;
