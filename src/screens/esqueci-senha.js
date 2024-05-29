import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EsqueciSenha = () => {
  return (
    <View style={styles.container}>
      <View style={styles.linha}></View>
      {/* Título */}
      <Text style={styles.title}>Redefinir senha</Text>
      {/* Descrição */}
      <View style={styles.linhaAbaixo}></View>
      <Text style={styles.description}>
        Digite seu e-mail para enviarmos o link para a redefinição de senha.
      </Text>
      
      {/* Campo de entrada de e-mail */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-MAIL:</Text>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.linhaVertical}></View>
          <Icon name="envelope" size={24} color="#4b3832" style={styles.icon} />
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
  linha: {
    height: 3,
    width: 250,
    backgroundColor: '#000',
    marginBottom: 0,
  },
  linhaAbaixo: {
    height: 3,
    width: 250,
    backgroundColor: '#000',
    marginBottom: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    marginBottom: 80,
    marginTop: 80,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
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
    height: 40,
    paddingHorizontal: 10,
  },
  linhaVertical: {
    height: '100%',
    width: 1,
    backgroundColor: '#000',
    marginHorizontal: 10,
  },
  icon: {
    marginLeft: 10,
    color: '#000',
    marginRight: 10,
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
    marginTop: 50,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default EsqueciSenha;
