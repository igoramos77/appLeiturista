import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routs';
import {AuthRoutes} from './auth.routs';
import { useAuth } from '../hooks/auth';

export function Routes() {
  const {logged} = useAuth();

  useEffect(() => {
    console.log('dentro do routs: ', logged)
  }, [logged]);

  return (
    <NavigationContainer>
      {logged ?
        <AppRoutes />
        :
        <AuthRoutes />
      }
    </NavigationContainer>
  )
}