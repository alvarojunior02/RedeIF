import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

import IconBack from './src/components/IconBack';
import IconInformation from './src/components/IconInformation';

export default function App() {
  return (
    <>
      <StatusBar 
        style='light' 
        backgroundColor='#34A444'
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
        </Stack.Navigator>
      </NavigationContainer>
    </>    
  );
}
