import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';

const NovaSenha = () => {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'FontAwesome': require('react-native-vector-icons/Fonts/FontAwesome.ttf'),
      });
    }

    loadFonts();
  }, []);

  return (
    <View style={styles.container}>
      {/* título */}
      <View style={styles.linhaTitle}></View>
      <Text style={styles.title}>Redefinir senha</Text>
      <View style={styles.linhaAbaixo}></View>
      {/* Descrição */}
      <Text style={styles.description}>
        Digite sua nova senha
      </Text>
      
      {/* Campo de entrada de e-mail */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nova Senha:</Text>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            secureTextEntry
            autoCapitalize="none"
          />
          <View style={styles.linha}></View>
          <Icon name="eye" size={24} color="#4b3832" style={styles.icon} />
        </View>
      </View>
      
      {/* Campo de entrada de confirmação de senha */}
      <View style={[styles.inputContainer, { marginBottom: 30 }]}>
        <Text style={styles.label}>Confirmar Senha:</Text>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            secureTextEntry
            autoCapitalize="none"
          />
          <View style={styles.linha}></View>
          <Icon name="eye" size={24} color="#4b3832" style={styles.icon} />
        </View>
      </View>
      
      {/* Link para voltar ao login */}
      <TouchableOpacity onPress={() => {/* aqui a gente bota depois a função para voltar ao login */}}>
        <Text style={styles.backToLogin}>Voltar para o login</Text>
      </TouchableOpacity>
      
      {/* Botão de enviar */}
      <TouchableOpacity style={styles.button} onPress={() => {/* aqui a gente bota depois a função para enviar e-mail de redefinição */}}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEA39C',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  linha: {
    height: 40,
    width: 1,
    backgroundColor: '#000',
    marginBottom: 0,
  },
  linhaTitle: {
    height: 3,
    width: 250,
    backgroundColor: '#000',
    // marginBottom: 20,
  },
  linhaAbaixo: {
    height: 3,
    width: 250,
    backgroundColor: '#000',
    marginBottom: 70,
  },
  description: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    marginBottom: 50,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 30,
    paddingHorizontal: 10,
  },
  icon: {
    marginLeft: 10, // Pequeno espaçamento à esquerda do ícone
  },
  backToLogin: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 100,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NovaSenha;
