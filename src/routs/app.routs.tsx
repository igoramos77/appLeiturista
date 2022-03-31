import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import { Platform } from 'react-native';
import MySends from '../screens/MySends';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRouts: React.FC = () => {

  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
        }
      }}
    >
     {/* <Screen
        name="Home"
        component={Dashboard}
        options={{ 
          headerShown: false,
          tabBarIcon: (({ size, color }) => (
            <Feather size={size} color={color} name="home" style={{ top: -6, position: 'absolute' }} />
          ))
        }}
      /> */}
      <Screen
        name="Submeter Certificado"
        component={Register}
        options={{ 
          headerShown: false,
          tabBarIcon: (({ size, color }) => (
            <Feather size={size} color={color} name="send" style={{ top: -6, position: 'absolute' }} />
          ))
        }}
      />
      {/*<Screen
        name="Meus envios"
        component={MySends}
        options={{ 
          headerShown: false,
          tabBarIcon: (({ size, color }) => (
            <Feather size={size} color={color} name="layers" style={{ top: -6, position: 'absolute' }} />
          ))
        }}
      />*/}
    </Navigator>
  );
}

export default AppRouts;