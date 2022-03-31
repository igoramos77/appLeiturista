import React from 'react';

import { Container, StatusSpan } from './styles';

interface IStatusCardProps {
  status: 'em_validação' | 'aprovado' | 'recusado';
}

const StatusCard: React.FC<IStatusCardProps> = ({status}) => {
  return (
    <Container status={status}>
      {status === 'em_validação' && <StatusSpan>em validação</StatusSpan>}
      {status === 'aprovado' && <StatusSpan>aprovado</StatusSpan>}
      {status === 'recusado' && <StatusSpan>recsuado</StatusSpan>}
    </Container>
  );
}

export default StatusCard;