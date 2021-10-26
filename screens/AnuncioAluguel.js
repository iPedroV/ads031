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

export default function AnuncioAluguel({ navigation: { goBack }, navigation, logado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

  const pressAnnouncement = () => {
    navigation.navigate('AnuncioFrete');
  };

  const pressRent1 = () => {
    navigation.navigate('DetailAluga1');
  };

  const pressRent2 = () => {
    navigation.navigate('DetailAluga2');
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
          <TouchableOpacity onPress={() => pressRent1()}>
            <Image
              style={styles.logo2}
              source={require('../assets/Cessna.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>
            
          <View style={styles.container2}>
            <Text style={styles.textContainer}>CESSNA</Text>
            <Text style={styles.textContainer2}>172 Skyhawk</Text>
          </View>
          <Text style={styles.textDetail}>Capacidade: 3 passageiros</Text>
          <Text style={styles.textDetail}>Autonomia: 1289 Km</Text>
          <Text style={styles.textDetail}>Velocidade: 226 Km/h</Text>
          <Text style={styles.textContainer3}>R$ 2.419,00</Text>
          </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => pressRent2()}>
            <Image
              style={styles.logo2}
              source={require('../assets/Avro.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>
            
          <View style={styles.container2}>
            <Text style={styles.textContainer}>BAE</Text>
            <Text style={styles.textContainer2}>146-300</Text>
          </View>
          <Text style={styles.textDetail}>Capacidade: 112 passageiros</Text>
          <Text style={styles.textDetail}>Autonomia: 2.965 Km</Text>
          <Text style={styles.textDetail}>Velocidade: 740 Km/h</Text>
          <Text style={styles.textContainer3}>R$ 96.800,00</Text>
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
