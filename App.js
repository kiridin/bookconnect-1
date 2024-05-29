import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ChatApp from './src/screens/athena'; 
import EsqueciSenha from './src/screens/esqueci-senha';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EsqueciSenha /> 
      {/* você muda aqui dentro pro nome da função que quiser exibir  */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5dc',
  },
});

export default App;
