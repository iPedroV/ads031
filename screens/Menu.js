import * as React from "react";
import {  View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Header, Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home'
import Favoritos from './Favoritos'
import Search from './Search'
import Search2 from './Search2'
import Search3 from './Search3'
import DetailVenda1 from './DetailVenda1' // apenas para visualização, remover depois
import DetailVenda2 from './DetailVenda2' // apenas para visualização, remover depois
import DetailAluga1 from './DetailAluga1' // apenas para visualização, remover depois
import DetailAluga2 from './DetailAluga2' // apenas para visualização, remover depois
import DetailFrete1 from './DetailFrete1' // apenas para visualização, remover depois
import DetailFrete2 from './DetailFrete2' // apenas para visualização, remover depois
import DetailedNews1 from './DetailedNews1' // apenas para visualização, remover depois
import DetailedNews2 from './DetailedNews2' // apenas para visualização, remover depois
import DetailedNews3 from './DetailedNews3' // apenas para visualização, remover depois
import News from './News'
import Exit from './Login'

export default function Menu({navigation}) {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-home'
                      : 'ios-home-outline'
                  }
                  size={size}
                  color={'#005A8E'}
                />
              );
            } else if (route.name === 'Search'|| route.name === 'Search2'|| route.name === 'Search3') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-search'
                      : 'ios-search-outline'
                  }
                  size={size}
                  color={'#005A8E'}
                />
              );
            } else if (route.name === 'News') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-document'
                      : 'ios-document-outline'
                  }
                  size={size}
                  color={'#005A8E'}
                />
              );
            } else if (route.name === 'Favoritos') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'star'
                      : 'star-outline'
                  }
                  size={size}
                  color={'#005A8E'}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#005A8E',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Search" component={Search} options={{headerShown: false}}/> 
        <Tab.Screen name="News" component={News} options={{headerShown: false}}/>
        <Tab.Screen name="Favoritos" component={Favoritos} options={{headerShown: false}}/>
      </Tab.Navigator>
  );
}