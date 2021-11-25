import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacityBase, View } from 'react-native';

function enviar(){
    alert('Você clicou no notão!');
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Segundo Aplicativo</Text>
      <textInput style={styles.campo}></textInput>
      <TouchableOpacity style={styles.botao}>
        <text style={styles.textobotao}>Mostrar</text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
nt
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

titulo:{
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15,
    color: '#800000'
},

campo:{
    backgroundColor:'#FFA07A', 
    fontSize: 20,
    margin: 15,
    padding:  10,
    color: '#FFF',
    borderRadius: 20
},

botao:{
    backgroundColor: '#800000',
    margin: 15,
    alignItems: ' center',
    padding: 10, 
    borderRadius: 20
},

textobotao:{
    color: 'FFF',
    fontSize: 25
}
});
