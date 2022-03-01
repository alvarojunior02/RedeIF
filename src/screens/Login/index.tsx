import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Login = ({navigation}: any) => {
  return (
    <>
        <View
            style={{
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center'
            }}
        >
            <Text>Tela de Login</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home');
                }}
            >
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    </>
  );
}

export default Login;