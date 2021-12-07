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
  FlatList,
  Pressable,
} from 'react-native';

import { UserContext } from '../context/UserContext';
import firebase from 'firebase';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Search({ navigation, logado }) {
  const [dadosCompra, setDadosCompra] = useState([]);
  const [dadosAluguel, setDadosAluguel] = useState([]);
  const [dadosFrete, setDadosFrete] = useState([]);
  const [usuario, setUsuario] = useContext(UserContext);


 const date = new Date().getDate(); //Current Date
  const month = new Date().getMonth() + 1; //Current Month
  const year = new Date().getFullYear(); //Current Year
  const baseDate = date + '/' + month + '/' + year;

  const pressAnnouncement = () => {
    navigation.navigate('AnuncioVenda');
  };

  const editItemCompra = (id) => {
    navigation.navigate('detalheCompra', { id: id });
  };

   const editItemFrete = (id) => {
    navigation.navigate('detalheFrete', { id: id });
  };

   const editItemAluguel = (id) => {
    navigation.navigate('detalheAluguel', { id: id });
  };

  const excludeItem = () => {
    // Tem que ir pra pagina de Edicao
  };

  useEffect(() => {
    const favoritosCompra = [];
    firebase
      .firestore()
      .collection('favoritosCompra')
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
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
          favoritosCompra.push({
            id: doc.id,
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
            dataInicial: dataInicial === '' ? baseDate : dataInicial,
            dataFinal: dataFinal,
          });
        });
        setDadosCompra([...favoritosCompra]);
      });
  }, []);

  useEffect(() => {
    const favoritosFrete = [];
    firebase
      .firestore()
      .collection('favoritosFrete')
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
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
          favoritosFrete.push({
            id: doc.id,
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
            dataInicial: dataInicial === '' ? baseDate : dataInicial,
            dataFinal: dataFinal,
          });
        });
        setDadosFrete([...favoritosFrete]);
      });
  }, []);

  useEffect(() => {
    const favoritosAluguel = [];
    firebase
      .firestore()
      .collection('favoritosAluguel')
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
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
          favoritosAluguel.push({
            id: doc.id,
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
            dataInicial: dataInicial === '' ? baseDate : dataInicial,
            dataFinal: dataFinal === '' ? baseDate : dataFinal,
          });
        });
        setDadosAluguel([...favoritosAluguel]);
      });
  }, []);

  const ItemCompra = ({ item }) => {
    return (
      <View style={styles.listsOrganization}>
        <View style={styles.listNameSeparationIcons}>
          <View style={styles.listNameAndDirection}>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color={'#005A8E'}
            />
            <Text style={styles.textDetail}>
              {item.inicialAviao} {item.modeloAviao}
            </Text>
          </View>
          <View style={styles.listEditAndExclude}>
            <TouchableOpacity onPress={() => editItemCompra(item.id)}>
              <View style={styles.iconSeparated}>
                <Ionicons name={'pencil-outline'} size={25} color={'#005A8E'} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.textDetail}>
          Pretenção de Compra:{' '}
          {item.dataInicial}
        </Text>
      </View>
    );
  };

  const ItemFrete = ({ item }) => {
    return (
      <View style={styles.listsOrganization}>
        <View style={styles.listNameSeparationIcons}>
          <View style={styles.listNameAndDirection}>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color={'#005A8E'}
            />
            <Text style={styles.textDetail}>
              {item.inicialAviao} {item.modeloAviao}
            </Text>
          </View>
          <View style={styles.listEditAndExclude}>
            <TouchableOpacity onPress={() => editItemFrete(item.id)}>
              <View style={styles.iconSeparated}>
                <Ionicons name={'pencil-outline'} size={25} color={'#005A8E'} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.textDetail}>
          Pretenção de Frete:{' '}
          {item.dataInicial}
        </Text>
      </View>
    );
  };

  const ItemAluguel = ({ item }) => {
    return (
      <View style={styles.listsOrganization}>
        <View style={styles.listNameSeparationIcons}>
          <View style={styles.listNameAndDirection}>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color={'#005A8E'}
            />
            <Text style={styles.textDetail}>
              {item.inicialAviao} {item.modeloAviao}
            </Text>
          </View>
          <View style={styles.listEditAndExclude}>
            <TouchableOpacity onPress={() => editItemAluguel(item.id)}>
              <View style={styles.iconSeparated}>
                <Ionicons name={'pencil-outline'} size={25} color={'#005A8E'} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.textDetail}>
          Data Empréstimo:{' '}
          {item.dataInicial}
        </Text>
        <Text style={styles.textDetail}>
          Data Devolução:{' '}
          {item.dataFinal}
        </Text>
      </View>
    );
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
        <Text style={styles.textMain}>Favoritos</Text>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Text style={styles.textList}>Compras</Text>
            <FlatList
              data={dadosCompra}
              renderItem={ItemCompra}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.textList}>Aluguéis</Text>
            <FlatList
              data={dadosAluguel}
              renderItem={ItemAluguel}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.textList}>Fretes</Text>
            <FlatList
              data={dadosFrete}
              renderItem={ItemFrete}
              keyExtractor={(item) => item.id}
            />
          </View>
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

  boxContainer: {
    marginTop: 10,
  },

  listsOrganization: {
    borderBottomWidth: 1,
    paddingVertical: 5,
  },

  listNameAndDirection: {
    flexDirection: 'row',
  },

  listNameSeparationIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  listEditAndExclude: {
    flexDirection: 'row',
  },

  iconSeparated: {
    marginRight: 5,
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
    marginTop: -35,
  },

  textList: {
    textAlign: 'center',
    fontDamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 27,
    color: '#005A8E',
  },

  box: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#FFF',
    borderColor: '#999',
    boderWidth: 5,
    margin: 10,
    borderRadius: 15,
    padding: 15,
  },

  textDetail: {
    width: 'auto',
    color: '#3b3838',
    fontSize: 13,
    fontWeight: 'normal',
    paddingLeft: 5,
    marginTop: 3,
  },
});
