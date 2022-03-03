import React from 'react';

import {
    Container,
    Logo,
    Title,
    ButtonLogin,
    TextLogin,
    ButtonRegister,
    TextRegister,
    TextVersion
} from './styles';

import logo from '../../assets/logo.png';

const Home = ({ navigation }: any) => {
  return (
    <>
        <Container>
            <Logo source={logo}/>
            <Title>Rede IF</Title>

            <ButtonLogin
                onPress={() => {
                    navigation.navigate('Login');
                }}
            >
                <TextLogin>Entrar</TextLogin>
            </ButtonLogin>

            <ButtonRegister>
                <TextRegister>Criar Conta</TextRegister>
            </ButtonRegister>

            <TextVersion>1.0</TextVersion>
        </Container>
    </>
  );
}

export default Home;