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
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { UserContext } from '../context/UserContext';

export default function DetailedNews3({ navigation, logado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

  const pressNews = () => {
    navigation.navigate('News');
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
            style={{ width: 40, height: 40, marginTop: 5}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressNews()}>
          <Text style={styles.textNoticia}>
            Por que comprar uma aeronave?
          </Text>
        </TouchableOpacity>
        <Text style={styles.textTopic}>
              Em um de seus relatórios mensais, a Airbus afirmou ter entregue 40
              aeronaves para 25 companhias aéreas em agosto, uma leve queda em
              relação a julho. Para até o fim do ano, 384 entregas estão
              pendentes de entrega. Nos primeiros oito meses do ano, 269 vendas
              brutas foram feitas, ou 132 vendas líquidas, após cancelamentos.
            </Text>
        <Image
          style={styles.logo}
          source={require('../assets/cessna-172.jpg')}
          resizeMode="cover"
        />
        
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.textTopic}>
              Em um de seus relatórios mensais, a Airbus afirmou ter entregue 40
              aeronaves para 25 companhias aéreas em agosto, uma leve queda em
              relação a julho. Para até o fim do ano, 384 entregas estão
              pendentes de entrega. Nos primeiros oito meses do ano, 269 vendas
              brutas foram feitas, ou 132 vendas líquidas, após cancelamentos.
            </Text>
            <Text style={styles.textTopic}>
              Com este resultado, a fabricante está cada vez mais próxima da
              meta de entregar 600 unidades em 2021, além de ampliar a liderança
              no setor, visto que sua principal rival, a Boeing, ainda tenta se
              recuperar dos estragos causados pela suspensão das operações do
              737 MAX e do recente golpe sofrido pela low-cost europeia Ryanair,
              que suspendeu as negociações para a encomenda de 250 MAX 10, por
              discordâncias sobre preços.
            </Text>
            
          </ScrollView>
        </SafeAreaView>
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
    backgroundColor: '#fff',
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
    padding: 5,
  },
  posicao: {
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: 0,
  },
  textTopic: {
    textAlign: 'center',
    fontDamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 11,
    padding: 15,
  },
  textEnd: {
    textAlign: 'right',
    fontDamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 11,
    padding: 15,
  },
});
