import React, { useState, useContext, useEffect } from 'react';
import { Button, StyleSheet, TextInput, View, ImageBackground, Image, TouchableOpacity, Text, Animated } from 'react-native';
import firebase from 'firebase';

import { UserContext } from '../context/UserContext';

export default function Login({ navigation, logado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));

  const pressLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        setUsuario({ nome: userCredential.user.displayName, logado: true });
      })
      .catch((error) => alert(error.message));
    
    
  };

  const pressRemember = () => {
    navigation.navigate('remember');
  };

  const pressRegister = () => {
    navigation.navigate('register');
  };

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 1
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300
      })
    ]).start()
    
  }, [])

  return ( 
    <ImageBackground style={ styles.back } resizeMode='cover' source={require('../assets/backlogin.png')}>
      <Image style={ styles.logo } source={require('../assets/logo.png')} resizeMode= 'contain'/>             

      <Animated.View 
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              {translateY: offset.y}
            ]
          }
          ]}
      >
        <Text style={ styles.textLogin }>Digite seu e-mail:</Text>
        <TextInput 
          style={styles.boxLogin}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={ styles.textLogin }>Digite sua senha:</Text>
        <TextInput 
          style={styles.boxLogin}
          placeholder="Senha"
          keyboardType="number-pad"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity 
          onPress={() => pressRemember()}
        >
          <Text style={styles.textRemember}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <View style={styles.containerButton}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => pressLogin()}
          >
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textBottom}>
          <Text style={styles.textQuest}>Não tem uma Conta?</Text>
          <TouchableOpacity 
          onPress={() => pressRegister()}
        >
          <Text style={styles.textRegister}>Crie a sua!</Text>
        </TouchableOpacity>
        </View>
      </Animated.View>
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
    marginTop: 70
  },
  container: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 50
  },
  textLogin:{
    textAlign: 'left',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 27,
    color: '#1878BD'
  },
  boxLogin: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#14F2FA',
    borderRadius: 10,
    padding: 10,
  },
  textRemember:{
    marginTop: -15,
    marginRight: 5,
    textAlign: 'right',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 27,
    color: '#FA0303'
  },
  containerButton:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%'
  },
  button: {
    backgroundColor: '#005A8E',
    width: '60%',
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
  textBottom: {
    position: 'absolute',
    flex:0.1,
    left: -25,
    right: 0,
    bottom: -15,
    flexDirection:'row',
    height:80,
    alignItems:'center',
  },
  textQuest: {
    marginLeft: '20%',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 27,
  },
  textRegister: {
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16,
    lineHeight: 27,
    color: '#FA0303'
  }
});
