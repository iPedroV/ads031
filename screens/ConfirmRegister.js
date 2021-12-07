import React, { useState, useContext } from 'react';
import { Button, StyleSheet, TextInput, View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';

import { UserContext } from '../context/UserContext';

export default function ConfirmRegister({ navigation, logado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);
  

  const pressReturn = () => {
    navigation.navigate('login');
  };

  return ( 
    <ImageBackground style={ styles.back } resizeMode='cover' source={require('../assets/backlogin.png')}>
      <Image style={ styles.logo } source={require('../assets/logo.png')} resizeMode= 'contain'/>             

      <View style={styles.container}>
        <Text style={ styles.textRegister }>E-mail de confirmação de cadastro enviado com sucesso.</Text>
        <View style={styles.containerButton}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => pressReturn()}
          >
            <Text style={styles.textButton}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    
  );  
}



const styles = StyleSheet.create({
  back: {
    flex: 1
  },
  logo: {
    width: 270,
    height: 270,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50
  },
  container: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 50
  },
  textRegister:{
    textAlign: 'center',
    fontDamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 27,
    color: '#005A8E',
    marginTop: '10%'
  },
  containerButton:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%'
  },
  button: {
    backgroundColor: '#005A8E',
    width: '50%',
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15
  }, 
  textButton: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
