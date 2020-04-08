import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Input } from '../../components/shared/Input';
import { Button } from '../shared/Button';
import { InputGroup, Form } from './styles';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();
  const handleRegister = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      tel,
      city,
      uf
    }

    try {
      const res = await api.post('ongs', formData);
      toast.success(`ID de acesso ${res.data.id}`, {
        delay: 10000,
        autoClose: false,
        closeOnClick: false
      });
      history.push('/');
    }
    catch (error) {
      toast.error(`Ops! Problemas ao resgistrar!\n ${error.message}`);
    }
  }

  return (
    <Form onSubmit={handleRegister}>
      <Input
        type='text'
        value={name}
        placeholder="Nome da ONG"
        onChange={e => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Telefone"
        value={tel}
        onChange={e => setTel(e.target.value)}
      />
      <InputGroup>
        <Input
          type="text"
          placeholder="Cidade"
          value={city}
          onChange={e => setCity(e.target.value)}

        />
        <Input
          type="text"
          placeholder="UF"
          value={uf}
          onChange={e => setUf(e.target.value)}
        />
      </InputGroup>
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}
