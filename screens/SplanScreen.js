import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function SplashScreen() {
  return (
    <ImageBackground style={ styles.back } 
                 resizeMode='cover' 
                 source={require('../assets/backapp.png')}>
    <View style={styles.conteudo}>
      
      <Image 
          style={ styles.logo } 
          source={require('../assets/logo-splan.png')} 
          resizeMode= 'contain'
        />  
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  back:{
    flex: 1
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
});
