import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import styles from './styles'; // Importando seu arquivo de estilos

export default function Login({navigation}) {
  // ESTADOS (A memória do componente)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Menu aberto ou fechado?
  const [selectedRole, setSelectedRole] = useState('Administrador'); // Qual cargo foi escolhido?
  const [password, setPassword] = useState(''); // Senha digitada

  const cargos = ['Administrador', 'Contador', 'Empresa'];

  // FUNÇÃO DE VALIDAÇÃO E REDIRECIONAMENTO
  const handleLogin = () => {
    // 1. Verificação básica: Senha vazia
    if (password.trim() === '') {
      Alert.alert('Erro', 'Por favor, digite sua senha.');
      return;
    }

    // 2. Simulação de verificação de senha (exemplo: senha padrão '123456')
    // Na vida real, aqui você faria uma chamada para o seu backend/banco de dados
    if (password === '123456'){
      Alert.alert('Erro', 'Por favor, digite sua senha.');
      return;
    }

    // Supondo que o nome da sua rota de abas seja "HomeTabs"
    if (password === '123456') {
      // Este comando "pula" para dentro do seu BottomTabNavigator
      navigation.navigate('HomeTabs'); 
    } else {
      Alert.alert('Acesso Negado', 'Senha incorreta.');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* CABEÇALHO */}
        <View style={styles.header}>
          <Text style={styles.logoText}>CONTAX</Text>
          <Text style={styles.subLogo}>Gestão ME & MEI</Text>
        </View>

        {/* SELETOR CUSTOMIZADO (SUBSTITUTO DO PICKER) */}
        <Text style={styles.label}>Entrar como</Text>
        <TouchableOpacity 
          style={styles.selectBox} 
          activeOpacity={0.7}
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Text style={styles.selectText}>{selectedRole}</Text>
          <Text style={styles.setinha}>{isDropdownOpen ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {/* LISTA DE OPÇÕES (Só renderiza se isDropdownOpen for true) */}
        {isDropdownOpen && (
          <View style={styles.dropdownContainer}>
            {cargos.map((item) => (
              <TouchableOpacity 
                key={item} 
                style={styles.opcaoItem}
                onPress={() => {
                  setSelectedRole(item); // Muda o cargo
                  setIsDropdownOpen(false); // Fecha o menu
                }}
              >
                <Text style={styles.opcaoTexto}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* CAMPO DE SENHA */}
        <Text style={styles.label}>Senha do {selectedRole.toLowerCase()}</Text>
        <TextInput 
          style={styles.input}
          placeholder="******"
          placeholderTextColor="#CCC"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        {/* BOTÃO DE ACESSO */}
        <TouchableOpacity 
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Entrar no sistema</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>CONTAX — Sistema ME & MEI</Text>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}