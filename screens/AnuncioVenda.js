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

export default function AnuncioVenda({ navigation: { goBack }, navigation, logado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

  const pressAnnouncement = () => {
    navigation.navigate('Anunciovendas');
  };

  const pressSold1 = () => {
    navigation.navigate('DetailVenda1');
  };

  const pressSold2 = () => {
    navigation.navigate('DetailVenda2');
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
            style={{ width: 30, height: 30, marginTop: 3 }}
          />
        </TouchableOpacity>
        <Text style={styles.textoVoltar}>Pesquisa</Text>
      </View>

      <View style={styles.container1}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => pressSold1()}>
            <Image
              style={styles.logo2}
              source={require('../assets/319.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>
            
            <View style={styles.container1}>
              <Text style={styles.textContainer}>AIRBUS</Text>
              <Text style={styles.textContainer2}>A319</Text>
            </View>
            <Text style={styles.textDetail}>Capacidade: 156 passageiros</Text>
            <Text style={styles.textDetail}>Autonomia: 6.700 Km</Text>
            <Text style={styles.textDetail}>Velocidade: 871 Km/h</Text>
            <Text style={styles.textContainer3}>R$ 90.500.000,00</Text>
          </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => pressSold2()}>
            <Image
              style={styles.logo2}
              source={require('../assets/72.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>
            
            <View style={styles.container1}>
            <Text style={styles.textContainer}>ATR</Text>
            <Text style={styles.textContainer2}>72</Text>
          </View>
            <Text style={styles.textDetail}>Capacidade: 72 passageiros</Text>
            <Text style={styles.textDetail}>Autonomia: 1500 Km</Text>
            <Text style={styles.textDetail}>Velocidade: 511 Km/h</Text>
            <Text style={styles.textContainer3}>R$ 26.800.000,00</Text>
          </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    back: {
    flex: 1,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    paddingLeft: 10
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    paddingLeft: 10
  },
  container3: {
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  textoVoltar: {
    fontSize: 24,
    fontWeight: "bold"
  },
  box: {
     width: '90%',
    height: '100%',
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 15,
  },
  textContainer: {
    width: 'auto',
    height: 30,
    marginTop: -10,
    fontSize: 20,
    fontWeight: 'bold',
    
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
  },
  textContainer2: {
    width: 'auto',
    height: 30,
    color: '#d10816',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -10,
    paddingLeft: 10,
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
  },
  textContainer3: {
    width: 'auto',
    height: 30,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    paddingRight: 10,
    
    textAlign: "right"
    
  },
  textDetail: {
    width: 'auto',
    height: 20,
    color: '#3b3838',
    fontSize: 12,
    fontWeight: 'normal',
    paddingLeft: 20,
  },
  logo2: {
    flex: 1,
    width: 'auto',
    height: 150,
    borderRadius: 15,
    margin: 10,
  },
});
