import React from 'react';

import LogonForm from '../../components/LogonForm';
import { Container } from '../../components/shared/Container';
import { ContentForm } from './styles';
import herosImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';

export default function Logon() {
  return (
    <Container>
      <ContentForm>
        <img src={LogoImg} alt="Be The Hero" />
        <LogonForm />
      </ContentForm>
      <img src={herosImg} alt="Imagem pessoas apoiadas nos ombros" />
    </Container>
  );
}
