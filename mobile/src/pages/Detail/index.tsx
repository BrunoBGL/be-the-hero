import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import { Incident } from '../Incidents';
import { SafeAreaView } from 'react-native-safe-area-context';

type Tincident = {
  incident: Incident | undefined
}
export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<Record<string, Tincident>, ''>>();

  const { incident } = route.params;
  const message = `Ola tenho interesse em ajudar no caso ${incident?.title}`

  const navigateBack = () => navigation.goBack();

  const sendEmail = () => {
    MailComposer.composeAsync({
      recipients: [`${incident?.email}`],
      subject: `Caso: ${incident?.title}`,
      body: message,
    });
  }

  const sendWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=${incident?.tel}&text=${message}`);
  }

  const call = () => {
    Linking.openURL(`tel:${incident?.tel}}`);

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity
          accessibilityLabel="voltar para a lista de casos"
          onPress={navigateBack}
        >
          <Feather name='arrow-left' size={32} color='#E02041' />
        </TouchableOpacity>
      </View>
      <ScrollView>

        <View style={styles.card}>
          <View style={styles.fieldGroup}>
            <View>
              <Text style={styles.property}>CASO:</Text>
              <Text style={styles.value}>{incident?.title}</Text>
            </View>
            <View>
              <Text style={styles.property}>ONG:</Text>
              <Text style={styles.value}>{incident?.name}</Text>
            </View>
          </View>
          <Text style={styles.property}>DESCRIÇÃO:</Text>
          <Text style={styles.value}>{incident?.description}</Text>
          <Text style={styles.property}>VALOR:</Text>
          <Text style={styles.value}>
            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
              .format(incident?.value || 0)}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.contactMessage}>{`Salve o dia! \nSeja o herói desse caso.`}</Text>
          <Text style={styles.contactLabel}>Entre em contato:</Text>
          <View style={styles.groupButtons}>
            <TouchableOpacity
              style={styles.button}
              onPress={sendWhatsApp}
            >
              <Text style={styles.buttonText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={sendEmail}
            >
              <Text style={styles.buttonText}>E-mail</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={call}
            >
              <Text style={styles.buttonText}>Ligar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
