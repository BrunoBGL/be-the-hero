import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons/';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export interface Incident {
  id: number,
  title: string,
  name: string,
  description: string,
  value: number,
  email: string,
  tel: string,
  city: string,
  uf: string,
}

export default function Incidents() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const loadIncidents = async () => {
    if (loading) return;
    if (total > 0 && incidents.length === total) return;

    setLoading(true);

    const res = await api.get<Incident[]>('incidents', { params: { page } });
    console.log(res.data)
    setIncidents([...incidents, ...res.data]);
    setTotal(res.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents()
  }, []);

  const navigateToDetail = (incident: Incident) =>
    navigation.navigate(
      'detail', { incident }
    );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de
          <Text style={styles.textBold}> {total} casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>A Escolha um dos casos abaixo e salve o dia.</Text>
      <FlatList<Incident>
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        onEndReached={loadIncidents}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>CASO: </Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' })
                .format(incident.value)}
            </Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.textButton}>ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View >
  );
}
