import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { UserProvider } from './context/UserContext';
import MainNavigator from './routes/MainNavigation';
import SplashScreen from './screens/SplanScreen';

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
