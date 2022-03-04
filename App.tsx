import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native'

import THEME from './src/theme';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Singup from './src/screens/Singup';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
    <ThemeProvider theme={THEME}>
      <StatusBar 
        style='light' 
        backgroundColor={THEME.COLORS.GREEN_400}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={Home}
          />
          <Stack.Screen 
            name="Login" 
            component={Login}
          />
          <Stack.Screen 
            name="Singup" 
            component={Singup}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </>    
  );
}
