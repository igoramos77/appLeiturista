import React from 'react';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Container, Header, H1, H2, Strong, BigContainer, FormControl, FormContainer, BigAvatar, Form, Label, Footer } from './styles';
import { useAuth } from '../../hooks/auth';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

interface IUserProps {
  id: number,
  first_name: string,
  last_name: string,
  matricula: string,
  email: string,
  foto: string,
  curso: number,
}[]

const ActivePreview: React.FC = () => {
  const { user } =  useAuth();

  return (
    <Container>
      <Header colors={['#5E72E4', '#5E72E4']} start={{ x: 0, y: 0}} end={{x: 1, y: 1}} />

      <BigContainer>
        <FormContainer>
          <BigAvatar source={{ uri: user.foto }} />

          <Form>
            <FormControl>
              <Label>Matrícula</Label>
              <Input value={user.matricula} editable={false} disabled />
            </FormControl>
            <FormControl>
              <Label>Nome completo</Label>
              <Input value={`${user.first_name} ${user.last_name}`} editable={false} disabled />
            </FormControl>
            <FormControl>
              <Label>E-mail</Label>
              <Input value={user.email} editable={false} disabled />
            </FormControl>
            <FormControl>
              <Button title="Atualizar perfil!" background="primary" />
            </FormControl>
          </Form>
        </FormContainer>
      </BigContainer>

      <Footer>Summa 2021 - Todos os direitos reservasos</Footer>
    </Container>
  );
}

export default ActivePreview;