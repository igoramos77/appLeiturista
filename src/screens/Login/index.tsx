import React, { useState, useCallback } from 'react';

import api from '../../services/api';

import {Text, Image, Alert} from 'react-native';

import Feather from '@expo/vector-icons/build/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Logo from '../../../assets/logo1.svg';
import Input from '../../Componets/Forms/Input';
import Button from '../../Componets/Forms/Button';

import { Container, Header, TitleContent, H1, Form, FormControl, Footer } from './styles';
import { useAuth } from '../../hooks/auth';

interface IUserProps {
  id: number,
  first_name: string,
  last_name: string,
  matricula: string,
  email: string,
  foto: string,
  curso: number,
}[]

const Login: React.FC = () => {
  const { setLogged } =  useAuth();

  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [loadingLogin, setLoadingLogin] = useState(false);
  
  const handleLogin = useCallback(() => {
    async function loadData() {
      try {    
        if (matricula === "123" && senha === "123") {
          setLogged(true)
        } else {
          alert("Código do usuário ou senha inválidos")
        }
      } catch (error: any) {
        console.log(error.response);
        Alert.alert('Matrícula ou senha inválidos!');
      }
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
      console.log({matricula, senha})
    }
    loadData();
  }, [matricula, senha]);

  return (
    <Container>
      <KeyboardAwareScrollView extraHeight={150}>
        <Header colors={['#5E72E4', '#5E72E4']} start={{ x: 0, y: 0}} end={{x: 1, y: 1}}>
          <TitleContent>
            <H1>AppLeiturista</H1>
          </TitleContent>
        </Header>
        
        <Form>
          <FormControl>
            <Input placeholder="Código" keyboardType='number-pad' onChangeText={(text) => setMatricula(text)} />
            <Feather size={24} color="#CBD1EB" name="user" style={{ position: 'absolute', zIndex: 99999, right: 16 }} />
          </FormControl>
          <FormControl>
            <Input placeholder="Senha" secureTextEntry={true} onChangeText={(text) => setSenha(text)} />
            <Feather size={24} color="#CBD1EB" name="lock" style={{ position: 'absolute', zIndex: 99999, right: 16 }} />
          </FormControl>
          <FormControl>
            <Button title="Entrar no sistema!" background="primary" onPress={handleLogin} loading={loadingLogin} />
          </FormControl>
        </Form>
        <Footer>2022 - App Leiturista</Footer>
      </KeyboardAwareScrollView>
    </Container>
  );
}

export default Login;