import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { UserContext } from '../context/UserContext';
import Login from '../screens/Login';
import Remember from '../screens/Remember';
import ConfirmRemember from '../screens/ConfirmRemember';
import Register from '../screens/Register';
import ConfirmRegister from '../screens/ConfirmRegister';
import Menu from '../screens/Menu';
import Home from '../screens/Home';
import Favoritos from '../screens/Favoritos';
import Search from '../screens/Search';
import Search2 from '../screens/Search2';
import Search3 from '../screens/Search3';
import AnuncioVenda from '../screens/AnuncioVenda';
import DetailVenda1 from '../screens/DetailVenda1';
import DetailVenda2 from '../screens/DetailVenda2';
import AnuncioAluguel from '../screens/AnuncioAluguel';
import DetailAluguel1 from '../screens/DetailAluga1';
import DetailAluguel2 from '../screens/DetailAluga2';
import AnuncioFrete from '../screens/AnuncioFrete';
import DetailFrete1 from '../screens/DetailFrete1';
import DetailFrete2 from '../screens/DetailFrete2';
import News from '../screens/News';
import News1 from '../screens/DetailedNews1';
import News2 from '../screens/DetailedNews2';
import News3 from '../screens/DetailedNews3';
import Proposta from '../screens/Proposta';
import ConfirmMensagem from '../screens/ConfirmMensager';
import DetalheCompra from '../screens/EditDetalhesCompra';
import DetalheFrete from '../screens/EditDetalhesFrete';
import DetalheAluguel from '../screens/EditDetalhesAluguel';



const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [usuario] = useContext(UserContext);
  return (
    <Stack.Navigator>
     {usuario.logado ? (
        <>
          <Stack.Screen 
            name="home" 
            component={Menu}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="detalheCompra"
            component={DetalheCompra}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="detalheFrete"
            component={DetalheFrete}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="detalheAluguel"
            component={DetalheAluguel}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="search"
            component={Search}
            options={{ headerShown: false }}    
          />
          <Stack.Screen
            name="search2"
            component={Search2}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="search3"
            component={Search3}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="news"
            component={News}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="news1"
            component={News1}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="news2"
            component={News2}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="news3"
            component={News3}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="AnuncioVenda"
            component={AnuncioVenda}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="DetailVenda1"
            component={DetailVenda1}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="DetailVenda2"
            component={DetailVenda2}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="AnuncioAluguel"
            component={AnuncioAluguel}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="DetailAluga1"
            component={DetailAluguel1}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="DetailAluga2"
            component={DetailAluguel2}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="AnuncioFrete"
            component={AnuncioFrete}
            options={{ headerShown: false }}
            
          />
          <Stack.Screen
            name="DetailFrete1"
            component={DetailFrete1}
            options={{ headerShown: false }}
           
          />
          <Stack.Screen
            name="DetailFrete2"
            component={DetailFrete2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="proposta"
            component={Proposta}
            options={{ headerShown: false }}
           
          />
          <Stack.Screen
            name="mensagem"
            component={ConfirmMensagem}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="favoritos"
            component={Favoritos}
            options={{ headerShown: false }}  
          />
     </>
     ) : (
        <>
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="confirmRegister"
            component={ConfirmRegister}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="remember"
            component={Remember}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="confirmRemember"
            component={ConfirmRemember}
            options={{ headerShown: false }}
            
          />
        </>
      )}
    </Stack.Navigator>
  );
}
