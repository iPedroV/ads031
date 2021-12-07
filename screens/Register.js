import React, { useState, useContext } from 'react';
import { Button, StyleSheet, TextInput, View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase';

import { UserContext } from '../context/UserContext';

export default function Register({ navigation, logado }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirme, setConfirme] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

  const pressRegister = () => {
     firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        setUsuario({ logado: true, nome: nome });
        return userCredential.user.updateProfile({ displayName: nome });
      })
      .catch((error) => alert(error.message));
    navigation.navigate('confirmRegister');
  };

  const pressCancel = () => {
    navigation.navigate('login');
  };

  return ( 
    <ImageBackground style={ styles.back } resizeMode='cover' source={require('../assets/backlogin.png')}>
      <Image style={ styles.logo } source={require('../assets/logo.png')} resizeMode= 'contain'/>             

      <View style={styles.container}>
        <Text style={ styles.textLogin }>Nome de Usuário:</Text>
        <TextInput 
          style={styles.boxLogin}
          placeholder="Nome"
          //keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setNome(text)}
        />
        <Text style={ styles.textLogin }>E-mail:</Text>
        <TextInput 
          style={styles.boxLogin}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={ styles.textLogin }>Senha:</Text>
        <TextInput 
          style={styles.boxLogin}
          placeholder="Senha"
          keyboardType="number-pad"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(text) => setSenha(text)}
        />
        <Text style={ styles.textLogin }>Confirme sua senha:</Text>
        <TextInput 
          style={styles.boxLogin}
          placeholder="Confirme"
          keyboardType="number-pad"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(text) => setConfirme(text)}
        />
        <View style={styles.containerButton}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => pressRegister()}
          >
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => pressCancel()}
          >
            <Text style={styles.textButton}>Cancelar</Text>
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
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: -100
  },
  textLogin:{
    textAlign: 'left',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 27,
    color: '#005A8E'
  },
  boxLogin: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 15,
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#005A8E',
    borderRadius: 10,
    padding: 10,
  },
  containerButton:{
    alignItems: 'center',
    justifyContent: 'center',
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
