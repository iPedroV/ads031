import React, { useState, useContext, useEffect } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';

import Favoritos from './Favoritos';
import { UserContext } from '../context/UserContext';
import firebase from 'firebase';
import DatePicker from 'react-native-datepicker';

export default function EditDetalhesAluguel({
  navigation: { goBack },
  navigation,
  logado,
  route,
}) {
  const [usuario, setUsuario] = useContext(UserContext);
  const { id } = route.params;
  const [inicialAviao, setInicialAviao] = useState('');
  const [modeloAviao, setModeloAviao] = useState('');
  const [valor, setValor] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [autonomia, setAutonomia] = useState('');
  const [velocidade, setVelocidade] = useState('');
  const [pesoVazio, setPesoVazio] = useState('');
  const [pesoMaximo, setPesoMaximo] = useState('');
  const [horasVoo, setHorasVoo] = useState('');
  const [tipoServico, setTipoServico] = useState('');
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  const date = new Date().getDate(); //Current Date
  const month = new Date().getMonth() + 1; //Current Month
  const year = new Date().getFullYear(); //Current Year
  const baseDate = date + '/' + month + '/' + year;

  const pressionaApagar = () => {
    const docRef = firebase.firestore().collection('favoritosAluguel').doc(id);
    docRef.delete();
    navigation.navigate('favoritos');
  };

  const pressionaTeste = () => {
    console.log({ inicialAviao });
  };

  const sair = () => {
    setUsuario({logado: false})
  }

  useEffect(() => {
    (async () => {
      const docRef = firebase.firestore().collection('favoritosAluguel').doc(id);
      const doc = await docRef.get();
      const {
        inicialAviao,
        modeloAviao,
        valor,
        capacidade,
        autonomia,
        velocidade,
        pesoVazio,
        pesoMaximo,
        horasVoo,
        tipoServico,
        dataInicial,
        dataFinal,
      } = doc.data();
      setInicialAviao(inicialAviao);
      setModeloAviao(modeloAviao);
      setValor(valor);
      setCapacidade(capacidade);
      setAutonomia(autonomia);
      setVelocidade(velocidade);
      setPesoVazio(pesoVazio);
      setPesoMaximo(pesoMaximo);
      setHorasVoo(horasVoo);
      setTipoServico(tipoServico);
      setDataInicial(dataInicial === '' ? baseDate : dataInicial);
      setDataFinal(dataFinal  === '' ? baseDate : dataFinal);
    })();
  }, []);

  const pressionaSalvar = () => {
    const docRef = firebase.firestore().collection('favoritosAluguel').doc(id);
    docRef.set({
      inicialAviao: inicialAviao,
      modeloAviao: modeloAviao,
      valor: valor,
      capacidade: capacidade,
      autonomia: autonomia,
      velocidade: velocidade,
      pesoVazio: pesoVazio,
      pesoMaximo: pesoMaximo,
      horasVoo: horasVoo,
      tipoServico: tipoServico,
      dataInicial: dataInicial,
      dataFinal: dataFinal,
    });
    navigation.navigate('favoritos');
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
        <TouchableOpacity onPress={sair}>
         <Image
            source={require('../assets/exit.png')}
            style={{ width: 30, height: 30, marginTop: 3, marginLeft: 165 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.container2}>
            <Text style={styles.textContainer}>{inicialAviao}</Text>
            <Text style={styles.textContainer2}>{modeloAviao}</Text>
          </View>
          <Text style={styles.textContainer3}>{valor}</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.textDetail}>Capacidade: {capacidade}</Text>
          <Text style={styles.textDetail}>Autonomia: {autonomia}</Text>
          <Text style={styles.textDetail}>Velocidade: {velocidade}</Text>
          <Text style={styles.textDetail}>Peso Vazio: {pesoVazio}</Text>
          <Text style={styles.textDetail}>Peso Máximo: {pesoMaximo}</Text>
          <Text style={styles.textDetail}>Horas de Vôo: {horasVoo}</Text>
         <Text style={styles.textDetail}>Data Empréstimo: </Text>
          <TextInput
            style={styles.boxData}
            placeholder={baseDate}
            autoCorrect={false}
            value={dataInicial}
            onChangeText={(dataInicial) => setDataInicial(dataInicial)}
          />
          <Text style={styles.textDetail}>Data Devolucao: </Text>
          <TextInput
            style={styles.boxData}
            placeholder={baseDate}
            autoCorrect={false}
            value={dataFinal}
            onChangeText={(dataFinal) => setDataFinal(dataFinal)}
          />
          <TouchableOpacity
            style={styles.buttonFavorite}
            onPress={() => pressionaSalvar()}>
            <Text style={styles.textButtonFavorite}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonFavorite}
            onPress={() => pressionaApagar()}>
            <Text style={styles.textButtonFavorite}>Excluir</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginTop: 10,
  },
  textContainer2: {
    width: 'auto',
    height: 30,
    color: '#d10816',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginTop: 10,
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
  textData: {
    height: 30,
    color: '#3b3838',
    fontSize: 15,
    fontWeight: 'normal',
    paddingLeft: 10,
    marginBottom: 10,
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
