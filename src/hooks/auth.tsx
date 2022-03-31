import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUserProps {
  id: number,
  first_name: string,
  last_name: string,
  matricula: string,
  email: string,
  foto: string,
  curso: number,
}
interface IAuthContext {
  logged: boolean;
  setLogged(value: boolean): void;
  signIn(
    id: number,
    first_name: string,
    last_name: string,
    matricula: string,
    email: string,
    foto: string,
    curso: number,
    token: string,
    refresh_token: string,
  ): void;
  signOut(): void;
  user: IUserProps;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserProps>({} as IUserProps);
  const [logged, setLogged] = useState(false);

 /* mantem logado  
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = AsyncStorage.getItem('@summa:logged');
    return !!isLogged;
  }); */

  const signIn = useCallback((id, first_name, last_name, matricula, email, foto, curso, token, refresh_token) => {
    AsyncStorage.setItem('@summa:token', JSON.stringify({token: token, refresh_token: refresh_token,}));
    setUser({
      id: id,
      first_name: first_name,
      last_name: last_name,
      matricula: matricula,
      email: email,
      foto: foto,
      curso: curso
    })
    
    setLogged(true);
  }, []);

  const signOut = useCallback(() => {
    AsyncStorage.removeItem('@summa:token');
    setLogged(false);
  }, []);

  return (
    <AuthContext.Provider value={{logged, setLogged, signIn, signOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
