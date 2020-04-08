import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';
import {
  Header,
  ButtonLink,
  ButtonLogout,
  ButtonDelete,
  ContainerProfile,
  Text,
  TextStrong,
  TextDescription,
  Title,
  List,
  ItemCard,
} from './styles';
import LogoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongName = localStorage.getItem('@bethehero:ongName');
  const ongId = localStorage.getItem('@bethehero:ongId');

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      })
    } catch (error) {
      toast.error(`Ops! Problemas ao deletar o caso! ${error.message}`);
    }

    setIncidents(incidents.filter(incident => incident.id !== id))
  };

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(res => setIncidents(res.data));
  }, [ongId]);

  return (
    <ContainerProfile>
      <Header>
        <img src={LogoImg} alt="Be The Hero" />
        <Text>Bem Vinda, {ongName}</Text>
        <ButtonLink to="/new-incident">Cadastrar novo caso</ButtonLink>
        <ButtonLogout onClick={handleLogout}>
          <FiPower size={18} color="e02041" />
        </ButtonLogout>
      </Header>
      <Title>Casos cadastrados</Title>
      <List>
        {incidents.map(incident => (
          <ItemCard key={incident.id}>
            <TextStrong>Caso:</TextStrong>
            <TextDescription>{incident.title}</TextDescription>
            <TextStrong>Descrição:</TextStrong>
            <TextDescription>{incident.description}</TextDescription>
            <TextStrong>Valor: </TextStrong>
            <TextDescription>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</TextDescription>
            <ButtonDelete onClick={() => handleDelete(incident.id)}>
              <FiTrash2 size={20} color="#A8A8B3" />
            </ButtonDelete>
          </ItemCard>
        ))}
      </List>
    </ContainerProfile >
  );
}
