import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';
import {
  Form,
  Textarea,
  ButtonSecondary,
  FormGroup,
} from './styles';
import { Input } from '../shared/Input';
import { Button } from '../shared/Button';

export default function IncidentForm() {
  const ongId = localStorage.getItem('@bethehero:ongId');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post('incidents', {
        title,
        description,
        value,
      }, {
        headers: {
          Authorization: ongId
        }
      });
      toast.success('Caso cadastrado com sucesso!');
      history.push('/profile');
    } catch (error) {
      toast.error(`Ops! alconteu algum problema no cadastramento \n ${error.message}`)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Título do caso"
        value={title}
        onChange={e => setTitle(e.target.value)}
      ></Input>
      <Textarea
        placeholder="Descrição"
        value={description}
        onChange={e => setDescription(e.target.value)}
      ></Textarea>
      <Input
        placeholder="Valor em reais"
        value={value}
        onChange={e => setValue(e.target.value)}
      ></Input>
      <FormGroup>
        <ButtonSecondary type="button" onClick={() => history.push('/profile')}>Cancelar</ButtonSecondary>
        <Button type="submit">Cadastrar</Button>
      </FormGroup>
    </Form>

  );
}
