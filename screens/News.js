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

export default function News({ navigation, logado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

  const pressNews1 = () => {
    navigation.navigate('news1');
  };

  const pressNews2 = () => {
    navigation.navigate('news2');
  };

  return (
    <ImageBackground
      style={styles.back}
      resizeMode="cover"
      source={require('../assets/backapp.png')}>
      <View style={styles.posicao}>
        <Text style={styles.textInicio}>Noticias: </Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/aviao-noticia.jpg')}
          resizeMode="cover"
        />
        <TouchableOpacity onPress={() => pressNews1()}>
        <Text style={styles.textNoticia}>
          Boeing espera recuperação plena da aviação mundial em 2024
        </Text>
        </TouchableOpacity>
        <View style={styles.lineStyle} />
        
      </View>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/airbus.jpg')}
          resizeMode="cover"
        />
        <TouchableOpacity onPress={() => pressNews2()}>
        <Text style={styles.textNoticia}>
          Airbus entrega 40 aeronaves em agosto e amplia liderança no setor
        </Text>
        </TouchableOpacity>
        
        
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
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#fff'
  },
  
  logo: {
    width: 'auto',
    height: 200,
    zIndex: 1,
    marginTop: 0,
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
  textNoticia: {
    justifyContent: 'center',
    textAlign: 'center',
    fontDamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 27,
    color: '#005A8E',
    padding: 5
  },
  posicao: {
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: 0,
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 6,
  },
});
