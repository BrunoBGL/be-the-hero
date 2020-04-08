import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from '../../components/shared/Container';
import { Content } from '../../components/shared/Content';
import { StyledLink } from '../../components/shared/StyledLink';
import RegisterForm from '../../components/RegisterForm';
import { ContentRegister, Title, Text } from './styles';
import LogoImg from '../../assets/logo.svg'

export default function Register() {
  return (
    <Container>
      <Content>
        <ContentRegister>
          <img src={LogoImg} alt="Be The Hero" />
          <Title>Cadastro</Title>
          <Text>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</Text>
          <StyledLink to="/" >
            <FiArrowLeft size="16" color="#E02041" />
            Voltar para o logon
         </StyledLink>
        </ContentRegister>
        <RegisterForm />
      </Content>
    </Container>

  );
};
