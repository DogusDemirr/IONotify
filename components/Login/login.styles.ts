import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8', // Açık gri tonları
    padding: 16,
  },
  loginBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Yeşil tonları
    borderRadius: 8,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    marginBottom: 15,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F44336', // Kırmızı tonları
    borderRadius: 8,
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15, // Bu alanda biraz boşluk bırakabiliriz
  },
});

export default styles;
