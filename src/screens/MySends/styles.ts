import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
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


export const LastActivesTitle = styled.Text`
  padding: 0 24px;
  margin: 60px 0 10px 0;   
  font-size: ${RFValue(16)}px;
  color: ${props => props.theme.colors.title};
  font-family: ${props => props.theme.fonts.medium};
`;

export const LastActivesContent = styled.ScrollView.attrs({
  horizontal: false,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 10,
  }
})`
  padding: 0 24px;
`;

export const NotFound = styled.Text`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;
  color: ${props => props.theme.colors.title};
`;