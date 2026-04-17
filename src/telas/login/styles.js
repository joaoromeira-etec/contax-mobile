import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Container principal com a margem horizontal que você pediu
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30, // Distância segura das bordas do celular
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoImage: { 
      width: 125,
      height: 125,
      marginRight: 10
  },
  logoText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0cbddd', // Ciano da marca
    letterSpacing: 1,
  },
  subLogo: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    marginTop: 15,
    fontWeight: '600',
  },
  // O "BOTÃO" QUE FINGE SER UM SELECT
  selectBox: {
    width: '100%',
    height: 52,
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectText: {
    fontSize: 16,
    color: '#333',
  },
  setinha: {
    fontSize: 12,
    color: '#00A8B5',
  },
  // A LISTA QUE APARECE AO CLICAR
  dropdownContainer: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#EEE',
    // Sombras para flutuar sobre o layout
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    zIndex: 1000, // Garante que fique por cima de tudo
  },
  opcaoItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  opcaoTexto: {
    fontSize: 15,
    color: '#444',
  },
  // INPUTS DE TEXTO
  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0cbddd',
    height: 55,
    borderRadius: 10,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 12,
    color: '#AAA',
  }
});

export default styles;