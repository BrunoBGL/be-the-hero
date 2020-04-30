import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  card: {
    marginTop: 32,
    marginHorizontal: 24,
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 8,
  },

  property: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#41414D',
  },

  value: {
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  contactMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    color: '#13131A'
  },

  contactLabel: {
    marginVertical: 16,
    fontSize: 16,
    color: '#737380',
  },

  fieldGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 50,
  },

  groupButtons: {
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: 250,
    height: 50,
    backgroundColor: '#E02041',
    borderRadius: 8,
  },

  buttonText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#F0F0F5'
  }
})