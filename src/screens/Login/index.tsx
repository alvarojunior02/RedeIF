import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Header from '../../components/Header';
import theme from '../../theme';

import {
    Container,
    Body,
    Title,
    Label,
    Input,
    KeepLogged,
    CheckBox,
    LabelCheckBox,
    ButtonLogin,
    TextLogin,
    ButtonRecoverPassword,
    TextRecoverPassword
} from './styles';

const Login = ({navigation}: any) => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [checkBoxActive, setCheckBoxActive] = useState<boolean>(true);

    return (
        <>
            <Container>
                <Header navigation={navigation}/>

                <Body>
                    <Title>Entre na sua Conta</Title>
                    
                    <Label>E-mail ou Usuário</Label>
                    <Input
                        value={login}
                        onChangeText={newLogin => setLogin(newLogin)}
                    />

                    <Label>Senha</Label>
                    <Input 
                        value={password}
                        onChangeText={newPassword => setPassword(newPassword)}
                        secureTextEntry={true}
                    />

                    <KeepLogged>
                        <CheckBox 
                            onPress={() => {setCheckBoxActive(!checkBoxActive)}}
                            style={{ backgroundColor: 
                                `${
                                    checkBoxActive 
                                        ? theme.COLORS.GREEN_400
                                        : theme.COLORS.BACKGROUND
                                }` 
                            }}
                        />
                        <LabelCheckBox>Manter Logado</LabelCheckBox>
                    </KeepLogged>

                    <ButtonLogin>
                        <TextLogin>Entrar</TextLogin>
                    </ButtonLogin>

                    <ButtonRecoverPassword>
                        <TextRecoverPassword>Recuperar Senha</TextRecoverPassword>
                    </ButtonRecoverPassword>
                </Body>
            </Container>
        </>
    );
}

export default Login;