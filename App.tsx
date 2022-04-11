import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Home from './src/screens/Home';
import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import theme from './src/theme';


const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });
  if (!fontsLoaded) {
    return <AppLoading />
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style='dark' translucent backgroundColor='transparent' />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
