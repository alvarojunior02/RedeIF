import React from 'react';

import {
    Container,
    Logo,
    Title,
    BoxContent,
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
            <BoxContent>
                <Logo source={logo}/>
                <Title>Rede IF</Title>
            </BoxContent>
            <BoxContent>
                <ButtonLogin
                    onPress={() => {
                        navigation.navigate('Login');
                    }}
                >
                    <TextLogin>Entrar</TextLogin>
                </ButtonLogin>

                <ButtonRegister
                    onPress={() => {
                        navigation.navigate('Singup');
                    }}
                >
                    <TextRegister>Criar Conta</TextRegister>
                </ButtonRegister>

                <TextVersion>1.0</TextVersion>
            </BoxContent>
        </Container>
    </>
  );
}

export default Home;