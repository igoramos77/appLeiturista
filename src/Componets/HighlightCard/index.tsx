import React from 'react';

import { Container, Header, HeaderIntro, Title, IconContainer, Icon, Value, Total } from './styles';

interface IHighlightCardProps {
  title: string;
  icon: string;
  value: number;
  background: string;
  total_horas_necessarias?: number;
}

const HighlightCard: React.FC<IHighlightCardProps> = ({title, icon, value, background, total_horas_necessarias}) => {
  return (
    <Container>
      <Header>
        <HeaderIntro>
          <Title>{title}</Title>
          <IconContainer background={background}>
            <Icon name={icon} />
          </IconContainer>
        </HeaderIntro>
        <Value>{value}{total_horas_necessarias && <Total>/{total_horas_necessarias}</Total>}</Value>
      </Header>
    </Container>
  );
}

export default HighlightCard;