import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { UserProvider } from './context/UserContext';
import MainNavigator from './routes/MainNavigation';
import SplashScreen from './screens/SplanScreen';
// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCNdNCIW30y7Hs-Y9gprulfQIbtjTwsqc",
  authDomain: "biplaneaircrafts.firebaseapp.com",
  projectId: "biplaneaircrafts",
  storageBucket: "biplaneaircrafts.appspot.com",
  messagingSenderId: "895831123779",
  appId: "1:895831123779:web:c5158caadca37e539e31f6",
  measurementId: "G-KYCEJDD349"
};

// Initialize Firebase
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [exibeSplash, setExibeSplash] = useState(true);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  useEffect(() => {
    setTimeout(() => {
      setExibeSplash(false);
    }, 3000);
  }, []);

  
    
  if(!fontsLoaded){
    return(
      <AppLoading />
    );
  } else {
    return (
      <UserProvider>
        <NavigationContainer>
          {exibeSplash ? <SplashScreen /> : <MainNavigator />}
        </NavigationContainer>
      </UserProvider>
    );
  }
}
