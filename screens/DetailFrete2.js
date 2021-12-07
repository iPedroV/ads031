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
import { Icon } from 'react-native-elements';
import { UserContext } from '../context/UserContext';
import firebase from 'firebase';


export default function DetailFrete2({
  navigation: { goBack },
  navigation,
  logado,
}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

   const [data, setData] = useState('');

  const date = new Date().getDate(); //Current Date
  const month = new Date().getMonth() + 1; //Current Month
  const year = new Date().getFullYear(); //Current Year
  const baseDate = date + '/' + month + '/' + year;

  const pressFavoriteBuySave = () => {
    firebase
      .firestore()
      .collection('favoritosFrete')
      .add({
        inicialAviao: 'Boeing',
        modeloAviao: '737-200 ',
        valor: 'R$ 12.760,00',
        capacidade: '136 passageiros',
        autonomia: '3.500 km',
        velocidade: '800 km/h',
        pesoVazio: '43.091 kg',
        pesoMaximo: '58.105 kg',
        horasVoo: '280.105 h',
        tipoServico: 'frete',
        dataInicial: data === '' ? baseDate : data,
        dataFinal: '',
      });
    navigation.navigate('favoritos');
  };

  const pressAnnouncement = () => {
    navigation.navigate('proposta');
  };

  function onDateChange(value) {
    setData(value);
  }

  const sair = () => {
    setUsuario({logado: false})
  }

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
        <TouchableOpacity onPress={sair}>
         <Image
            source={require('../assets/exit.png')}
            style={{ width: 30, height: 30, marginTop: 3, marginLeft: 165 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.box}>
          <Image
            style={styles.logo2}
            source={require('../assets/Boeing-737-200.jpg')}
          />
          <View style={styles.container2}>
            <Text style={styles.textContainer}>Boeing</Text>
            <Text style={styles.textContainer2}>737-200</Text>
          </View>
          <Text style={styles.textContainer3}>R$ 12.760,00</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.textDetail}>Capacidade: 136 passageiros</Text>
          <Text style={styles.textDetail}>Autonomia: 3.500 Km</Text>
          <Text style={styles.textDetail}>Velocidade: 800 Km/h</Text>
          <Text style={styles.textDetail}>Peso Vazio: 43.091 kg</Text>
          <Text style={styles.textDetail}>Peso Máximo: 58.105 kg</Text>
          <Text style={styles.textDetail}>Horas de Vôo: 280.650 h</Text>
          <Text style={styles.textDetail}>Data de pretenção para Frete:</Text>
          <TextInput
            style={styles.boxData}
            placeholder={baseDate}
            autoCorrect={false}
            onChangeText={(data) => setData(data)}
          />
          <TouchableOpacity
            style={styles.buttonFavorite}
            onPress={() => pressFavoriteBuySave()}>
            <Text style={styles.textButtonFavorite}>
              Adicionar Aos Favoritos
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => pressAnnouncement()}>
            <Text style={styles.textButton}>Enviar mensagem</Text>
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
  container2: {
    flex: 1,
    flexDirection: 'row',
  },
  container3: {
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  textoVoltar: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  box: {
    width: 'auto',
    height: 'auto',
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
    paddingLeft: 10,
  },
  textContainer2: {
    width: 'auto',
    height: 30,
    color: '#d10816',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -10,
    paddingLeft: 10,
  },
  textContainer3: {
    width: 'auto',
    height: 30,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  textDetail: {
    width: 'auto',
    height: 30,
    color: '#3b3838',
    fontSize: 15,
    fontWeight: 'normal',
    paddingLeft: 10,
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 6,
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },
  button: {
    backgroundColor: '#005A8E',
    width: '60%',
    height: 44,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    fontWeight: 'bold',
  },
  logo2: {
    flex: 1,
    width: 'auto',
    height: 180,
    borderRadius: 15,
    margin: 10,
  },
  buttonFavorite: {
    backgroundColor: '#005A8E',
    width: '50%',
    height: 25,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  textButtonFavorite: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
    fontWeight: 'bold',
  },
  boxData: {
    marginLeft: 10,
    backgroundColor: '#fff',
    width: 100,
    marginBottom: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#005A8E',
    borderRadius: 10,
    padding: 10,
  },
});
