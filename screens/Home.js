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

import Ionicons from 'react-native-vector-icons/Ionicons';

import { UserContext } from '../context/UserContext';

export default function Home({ navigation, logado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

  const pressBuy = () => {
    navigation.navigate('search');
  };
  const pressBuy2 = () => {
    navigation.navigate('search2');
  };
  const pressBuy3 = () => {
    navigation.navigate('search3');
  };
  const pressNews1 = () => {
    navigation.navigate('news1');
  };

  const pressNews3 = () => {
    navigation.navigate('news3');
  };

  const sair = () => {
    setUsuario({logado: false})
  }

  return (
    <ImageBackground
      style={styles.back}
      resizeMode="cover"
      source={require('../assets/backapp.png')}>
      <View style={styles.posicao}>
        <Text style={styles.textInicio}>Noticia: </Text>
        <TouchableOpacity onPress={() => pressNews1()}>
          <Text style={styles.textInicio2}>
            Boeing espera recuperação plena da aviação mundial em 2024
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => pressNews1()}>
          <Image
            style={styles.logo}
            source={require('../assets/aviao-noticia.jpg')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
          <TouchableOpacity 
            style={styles.button}
            onPress={sair}
          >
            <Text style={styles.textButton}>Sair</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => pressBuy()}>
          <View style={styles.box}>
            <Image
              style={styles.box3}
              source={require('../assets/comprar.png')}
              resizeMode="contain"
            />
            <Text style={styles.textBox}>Comprar </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressBuy2()}>
          <View style={styles.box}>
            <Image
              style={styles.box3}
              source={require('../assets/alugar.png')}
              resizeMode="contain"
            />
            <Text style={styles.textBox}>Alugar </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressBuy3()}>
          <View style={styles.box}>
            <Image
              style={styles.box3}
              source={require('../assets/fretar.png')}
              resizeMode="contain"
            />
            <Text style={styles.textBox}>Fretar </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => pressNews3()}>
        <View style={styles.box2}>
          <Image style={styles.logo2} source={require('../assets/jatin.jpg')} />
          <Text style={styles.textInicio3}>Porque comprar uma aeronave?</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
  },
  container2: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  box: {
    width: 80,
    height: 100,
    backgroundColor: '#FFF',
    borderColor: '#000',
    boderWidth: 5,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    width: 'auto',
    height: 200,

    borderColor: '#999',
    boderWidth: 5,
    margin: 10,
    borderRadius: 40,
  },
  box3: {
    width: 60,
    height: 60,
  },
  logo: {
    width: 'auto',
    height: 270,
    zIndex: 1,
    marginTop: 0,
  },
  logo2: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 40,
  },
  textInicio: {
    textAlign: 'left',
    fontDamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 27,
    color: '#ed1202',
  },
  textInicio2: {
    textAlign: 'center',
    fontDamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 27,
    color: '#FFFFFF',
  },
  textInicio3: {
    position: 'absolute',
    justifyContent: 'center',

    textAlign: 'center',
    fontDamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 27,
    color: '#000000',
  },
  posicao: {
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: 0,
  },
  textBox: {
    paddingLeft: 5,
    paddingTop: 10,
    textAlign: 'center',
    fontDamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,

    color: '#000',
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    fontWeight: 'bold',
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
  containerButton:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25%'
  },
});
