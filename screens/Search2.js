import React, { useState, useContext } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import { UserContext } from '../context/UserContext';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Search2({ navigation, logado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

  const pressAnnouncement = () => {
    navigation.navigate('AnuncioAluguel');
  };

  return (
    <ImageBackground
      style={styles.back}
      resizeMode="cover"
      source={require('../assets/backapp.png')}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/back-arrow.png')}
            style={{ width: 40, height: 40, marginTop: 10 }}
          />
        </TouchableOpacity>
        <Text style={styles.textMain}>Alugar</Text>
        <Text style={styles.textSecondary}>Filtrar</Text>
        <View style={styles.box}>
          <TextInput style={styles.boxSearch} placeholder="Fabricante"></TextInput>
          <TextInput style={styles.boxSearch} placeholder="Modelo"></TextInput>
          <TextInput style={styles.boxSearch} placeholder="Capacidade"></TextInput>
          <TextInput style={styles.boxSearch} placeholder="Autonomia"></TextInput>
          <TextInput style={styles.boxSearch} placeholder="Velocidade"></TextInput>
          <TextInput style={styles.boxSearch} placeholder="Peso Vazio"></TextInput>
          <TextInput style={styles.boxSearch} placeholder="Peso Máximo"></TextInput>
          <TextInput style={styles.boxSearch} placeholder="Valor de Aluguel"></TextInput>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => pressAnnouncement()}>
            <Text style={styles.textButton}>Ver anúncios</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 15,
    paddingTop: 20,
  },
  textMain: {
    textAlign: 'left',
    fontDamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 27,
    color: '#FFFFFF',
    marginLeft: 50,
    marginTop: -35
  },
  textSecondary: {
    textAlign: 'left',
    fontDamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 27,
    color: '#005A8E',
    marginLeft: 10
  },
  box: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#FFF',
    borderColor: '#999',
    boderWidth: 5,
    margin: 10,
    borderRadius: 15,
    padding: 15
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },
  button: {
    backgroundColor: '#005A8E',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    fontWeight: 'bold',
  },
  boxSearch: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontSize: 20,
    marginBottom: 15
  }
});
