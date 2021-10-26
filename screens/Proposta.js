import React, { useState, useContext } from 'react';
import { Button, CheckBox, StyleSheet, TextInput, View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';

import { UserContext } from '../context/UserContext';

export default function Mensagem({ navigation, logado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);
  const [isSelected, setSelected] =useState(false);

  const pressSend = () => {
    navigation.navigate('mensagem');
  };

  return ( 
    
    <ImageBackground
      style={styles.back}
      resizeMode="cover"
      source={require('../assets/backapp.png')}>
      <View style={styles.container3}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/back-arrow.png')}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <Text style={styles.textoVoltar}>Voltar</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.box}>
          <TextInput 
              style={styles.boxLogin}
              placeholder="Nome"
              //keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={() => {}}
            />
          <TextInput 
            style={styles.boxLogin}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <TextInput 
            style={styles.boxLogin}
            placeholder="Telefone"
            keyboardType="number-pad"
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <TextInput 
              style={styles.boxMensagem}
              placeholder="Mensagem"
              //keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={() => {}}
            />
        </View>
      </View>
      <View style={styles.checkbox}>
        <CheckBox 
        uncheckedIcon="square-o"
        checkedColor="green"
        unchekedColor="red"
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}
      />
      <Text style={ styles.textRemember }>Quero receber contatos da Biplone Aircrafts por e-mail,Whatsapp outros canais.</Text>
     </View>
    
     <View style={styles.containerButton}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => pressSend()}
          >
            <Text style={styles.textButton}>Enviar</Text>
          </TouchableOpacity>
      </View>
    </ImageBackground>
    
  );  
}



const styles = StyleSheet.create({
  back: {
    flex: 10,
  },
  container: {
    flex: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: 20,
  },
  container3: {
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  textoVoltar: {
    fontSize: 30,
    fontWeight: "bold"
  },
  box: {
    width: "90%",
    height: "auto",
    backgroundColor: '#FFF',
    padding: 15,
    margin: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '%',
  },
  button: {
    backgroundColor: '#004E89',
    width: '90%',
    height: 44,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    fontWeight: 'bold',
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
  boxMensagem: {
    backgroundColor: '#fff',
    width: '100%',
    height: 150,
    marginBottom: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#14F2FA',
    borderRadius: 10,
    padding: 10,
  },
  textRemember:{
    textAlign: 'center',
    fontDamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 27,
    color: '#005A8E',
    marginBottom: 20,
    marginTop: -10
  },
  checkbox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '40%',
    padding: 10
  }
});


