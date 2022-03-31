import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, Alert, Modal } from 'react-native';

import api from '../../services/api';

import LastActivesCard from '../../Componets/LastActivesCard';

import { 
  Container,
  LastActivesContent,
  LastActivesTitle,
  NotFound,
  Header, 
  TitleHeader,
} from './styles';

import { useAuth } from '../../hooks/auth';

interface IActivitiesProps {
  id: number;
  external_id: string;
  descricao: string;
  empresa: string;
  cnpj: string;
  carga_horaria_informada: number;
  carga_horaria_integralizada?: number | null;
  justificativa?: string | null;
  certificado: string;
  status: 'em_validação' | 'aprovado' | 'recusado';
  is_active: boolean;
  create_at: string;
  update_at: string;
  usuario: number;
  curso: number;
  categoria: number;
}

const MySends: React.FC = () => {
  const { user } = useAuth();
  const [activities, setActivities] = useState<IActivitiesProps[]>([]);

  useFocusEffect(
    useCallback(() => {
      async function loadData() {
        const response = await api.get(`/api/v1/usuarios/${user.id}/atividades/`);
        console.log('LIST ACTIVITIES >>>>>>>>>>>>>>>>>>>');
        console.log(response.data);
        setActivities(response.data);
      }
      loadData();
    }, [])
  );

  return (
    <Container>
      <Header colors={['#6e61c6', '#a98ef3']} start={{ x: 0, y: 0}} end={{x: 1, y: 1}}>
        <TitleHeader>Histórico de Envios</TitleHeader>
      </Header>

      {activities && activities.length > 0 ? 
        <LastActivesContent>
          {activities.map((activitie, index) => (
            <LastActivesCard
              key={index}
              title={activitie.descricao}
              value={activitie.carga_horaria_integralizada || activitie.carga_horaria_informada}
              status={activitie.status}
              date={activitie.create_at}
              certificado_img={activitie.certificado}
            />
          ))}
        </LastActivesContent>
      :
        <NotFound>Poxa, você ainda não submeteu nenhuma atividade 😢</NotFound>
      }
      
    </Container>  
  );
}

export default MySends;