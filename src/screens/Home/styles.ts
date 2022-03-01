import styled from 'styled-components/native';

const widthButton = "200px";
const heightButton = "50px";
const borderRadius = "10px";

export const Container = styled.View`
    flex: 1;
    align-items: center;

    background-color: white;
`;

export const Logo = styled.Image`
    width: 170px;
    height: 170px;

    margin-top: 120px;
`;

export const Title = styled.Text`
    font-size: 52px;
    font-family: Roboto;
    font-weight: bold;
    color: black;

    margin-top: 30px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    width: ${widthButton};
    height: ${heightButton};

    justify-content: center;
    align-items: center;

    border-radius: ${borderRadius};
    border: 2px solid black;
    background-color: transparent;

    margin-top: 100px;
`;

export const TextLogin = styled.Text`
    font-size: 35px;
    font-family: Roboto;
    font-weight: bold;
    color: #34A444;
`;

export const ButtonRegister = styled.TouchableOpacity`
    width: ${widthButton};
    height: ${heightButton};

    justify-content: center;
    align-items: center;

    border-radius: ${borderRadius};
    border: 2px solid black;
    background-color: transparent;

    margin-top: 30px;
`;

export const TextRegister = styled.Text`
    font-size: 25px;
    font-family: Roboto;
    font-weight: bold;
    color: #BA9E07;
`;

export const TextVersion = styled.Text`
    font-size: 22px;
    font-family: Roboto;
    color: black;

    margin-top: 30px;
`;