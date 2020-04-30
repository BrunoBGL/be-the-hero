import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Incidents from '.';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 15,
    color: '#737380'
  },

  textBold: {
    fontWeight: 'bold',
  },

  title: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#13131a'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
    color: '#737380'
  },

  incidentList: {
    marginTop: 30,
  },

  incident: {
    marginVertical: 16,
    padding: 25,
    borderRadius: 8,
    backgroundColor: '#fff'
  },

  incidentProperty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#41414D',
  },

  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 15,
    lineHeight: 24,
    color: '#737380',
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderTopWidth: 2,
    borderTopColor: '#F0F0F5',
  },

  textButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#E02041',
  }

});