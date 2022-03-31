import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import truncate from '../../utils/truncateStrings';
import StatusCard from './StatusCard';

import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Modal, Text } from 'react-native';

import { Container, Header, Title, Value, Footer, Status, Date } from './styles';
import { CloseModal, CloseModalBtn } from '../../screens/Dashboard/styles';
import ActivePreview from '../ActivePreview';

interface ILastActivesCardProps {
  title: string;
  value: string | number;
  status: 'em_validação' | 'aprovado' | 'recusado';
  date: string;
  certificado_img?: string;
}

const extensionIsImage = (value: string) => {
  const ext = value.substr(value.lastIndexOf('.') + 1);
  if (ext !== 'pdf') {
    return true;
  } else {
    return false;
  }
}

const LastActivesCard: React.FC<ILastActivesCardProps> = ({title, value, status, date, certificado_img}) => {
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  return (
    <>
      <Container onPress={() => {setmodalIsVisible(true)}}>
        <Header>
          <Title>{truncate(title, 24)}</Title>
          {value > 1 ? <Value>{value} horas</Value> : <Value>{value} hora</Value>}
        </Header>
        <Footer>
          <StatusCard status={status} />
          <Date>{format(parseISO(date), `dd LLL',' hh':'mm`, { locale: ptBR })}</Date>
        </Footer>
      </Container>
      {/* <Modal visible={modalIsVisible} >
        <CloseModal>
          <CloseModalBtn onPress={() => setmodalIsVisible(false)}>
            <Feather size={22} color="#fff" name="chevron-left" />
          </CloseModalBtn>
        </CloseModal>
        <ActivePreview />
      </Modal> */}
    </>
  );
}

export default LastActivesCard;