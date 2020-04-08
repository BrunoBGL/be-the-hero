import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import {
  ContentIncident,
  Title,
  Text
} from './styles';
import { Container } from '../../components/shared/Container';
import { Content } from '../../components/shared/Content';
import IncidentForm from '../../components/IncidentForm';
import LogoImg from '../../assets/logo.svg';
import { StyledLink } from '../../components/shared/StyledLink';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <ContentIncident>
          <img src={LogoImg} alt="Be The Hero" />
          <Title>Cadastrar novo caso</Title>
          <Text>Descreva o caso detalhadamente para encontrar um herói para resolver isso</Text>
          <StyledLink to="/" >
            <FiArrowLeft size="16" color="#E02041" />
            Voltar para home
         </StyledLink>
        </ContentIncident>
        <IncidentForm />
      </Content>
    </Container>
  );
}
