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

export default function DetailedNews1({ navigation, logado }) {
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
      <View style={styles.posicao}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/back-arrow-white.png')}
            style={{ width: 35, height: 35, marginTop: 10, marginLeft: 15 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/aviao-noticia.jpg')}
          resizeMode="cover"
        />
        <TouchableOpacity onPress={() => pressNews()}>
          <Text style={styles.textNoticia}>
            Boeing espera recuperação plena da aviação mundial em 2024
          </Text>
        </TouchableOpacity>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.textTopic}>
              A Boeing anunciou nesta terça-feira (14) que o mercado da aviação
              comercial deve ter uma recuperação completa até 2024 da queda
              provocada pela pandemia do coronavírus, ao mesmo tempo que elevou
              os prognósticos para a próxima década.
            </Text>
            <Text style={styles.textTopic}>
              O grupo americano projeto um volume de mercado de 9 trilhões de
              dólares para a próxima década, elevando a estimativa anterior de
              8,5 trilhões, segundo o relatório anual da empresa.
            </Text>
            <Text style={styles.textTopic}>
              "Enquanto nossa indústria se recupera, ela continua a se adaptando
              para atender às novas necessidades mundiais. Seguimos confiantes
              no crescimento a longo prazo da indústria aeroespacial", disse
              Marc Allen, diretor de estratégia da Boeing.
            </Text>
            <Text style={styles.textTopic}>
              "Nos estimula que os cientistas tenham entregue vacinas de maneira
              mais rápida que o imaginado e que os passageiros demonstrem grande
              confiança nas viagens aéreas", completou.
            </Text>
            <Text style={styles.textTopic}>
              Na comparação com seu relatório anterior, a Boeing espera agora
              para a próxima década um aumento das ordens de compra e de
              serviços de aviação. Mas espera o mesmo nível de demanda nos
              setores de defesa e espaço como na previsão anterior.
            </Text>
            <Text style={styles.textTopic}>
              "Perdemos quase dois anos de crescimento", disse Darren Hulst,
              vice-presidente da Boeing. "Mas projetamos uma recuperação aos
              níveis pré-vírus no fim de 2023 ou começo de 2024", completou.
            </Text>
            <Text style={styles.textEnd}>
              Fonte: Estado de Minas
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
