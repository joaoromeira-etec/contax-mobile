import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert, Image} from 'react-native';
import styles from './styles';

import Logo from "../../../assets/logoContaxCor.png";

export default function Login({navigation}) {
// ESTADOS (A memória do componente)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

// FUNÇÃO DE VALIDAÇÃO E REDIRECIONAMENTO
  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Atenção', 'Preencha e-mail e senha.');
      return;
      }

  const emailLower = email.toLowerCase();

// --- ÁREA DE TESTES (SIMULAÇÃO DO BANCO DE DADOS) ---
    let nivelAcesso = null;

    if (emailLower === 'admin@contax.com' && password === '123456') {
      nivelAcesso = 2; // Administrador
    } else if (emailLower === 'gerente@contax.com' && password === '123456') {
      nivelAcesso = 1; // Gerente
    } else if (emailLower === 'visitante@contax.com' && password === '123456') {
      nivelAcesso = 0; // Visualizador
    }

    if (nivelAcesso !== null) {
      // Redirecionamento baseado no nível detectado nos testes
      switch (nivelAcesso) {
        case 2:
          navigation.navigate('MyTabs', {screen: 'Gestao'});
          break;
        case 1:
          navigation.navigate('MyTabs', {screen: 'Dashboard'});
          break;
        case 0:
          navigation.navigate('MyTabs', {screen: 'Notas'}); 
          break;
      }
    } else {
      Alert.alert('Erro de Login', 'E-mail ou senha incorretos para teste.');
    }
  };

return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Image 
                    source={Logo} 
                    style={styles.logoImage} 
                    resizeMode="contain" // Garante que a imagem não distorça
                />
          <Text style={styles.logoText}>CONTAX</Text>
          <Text style={styles.subLogo}>Gestão ME & MEI</Text>
        </View>

        {/* CAMPO DE E-MAIL */}
        <Text style={styles.label}>E-mail de Acesso</Text>
        <TextInput 
          style={styles.input}
          placeholder="seuemail@exemplo.com"
          placeholderTextColor="#CCC"
          keyboardType="email-address" // Abre o teclado com o símbolo "@"
          autoCapitalize="none"        // Impede que a primeira letra seja maiúscula
          autoCorrect={false}          // Desativa o corretor para não atrapalhar o e-mail
          value={email}
          onChangeText={setEmail}
        />

        {/* CAMPO DE SENHA */}
        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={styles.input}
          placeholder="******"
          placeholderTextColor="#CCC"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        {/* ESQUECI MINHA SENHA (OPCIONAL) */}
        <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
          <Text style={{ color: '#0cbddd', fontSize: 13 }}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Entrar no sistema</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>CONTAX — Sistema Seguro</Text>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}