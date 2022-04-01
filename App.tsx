import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Home from './src/screens/Home';
import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import theme from './src/theme';
import store from './src/store';


const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });
  if (!fontsLoaded) {
    return <AppLoading />
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar style='dark' translucent backgroundColor='transparent' />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
