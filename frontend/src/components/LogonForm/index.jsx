import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Form, Title1 } from './styles';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import { StyledLink } from '../shared/StyledLink';

export default function LogonForm() {
  const [id, setId] = useState('');

  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await api.post('session', { id });

      localStorage.setItem('@bethehero:ongId', id);
      localStorage.setItem('@bethehero:ongName', res.data.name);

      history.push('/profile');
    } catch (error) {
      toast.error(`Ops! falha no login \n ${error.message}`)
    }
  }

  return (
    <Form onSubmit={handleLogin}>
      <Title1>Faça seu logon</Title1>
      <Input
        placeholder="Seu ID"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <Button type="submit">entrar</Button>
      <StyledLink to="/register" >
        <FiLogIn size="16" color="#E02041" />
        Não tenho cadastro
      </StyledLink>
    </Form>
  );
}
