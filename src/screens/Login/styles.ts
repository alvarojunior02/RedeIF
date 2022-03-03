import styled from "styled-components/native";

import {
    widthButton,
    heightButton,
    borderRadius
} from '../../config/pixels';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Body = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    padding: 0 10%;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: 32px;
`;

export const Label = styled.Text`
    margin-top: 30px;

    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: 20px;

    align-self: flex-start;
`;

export const Input = styled.TextInput`
    margin-top: 10px;

    width: 100%;
    height: 40px;

    border: 2px solid black;
    border-radius: ${borderRadius};
    padding-left: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const KeepLogged = styled.View`
    margin-top: 45px;

    justify-content: flex-start;
    align-items: center;
    flex-direction: row;

    align-self: flex-start;
`;

export const CheckBox = styled.TouchableOpacity`
    width: 30px;
    height: 30px;

    border: 2px solid black;
    border-radius: ${borderRadius};
`;

export const LabelCheckBox = styled.Text`
    margin-left: 30px;

    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: 20px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    margin-top: 70px;

    width: ${widthButton};
    height: ${heightButton};

    justify-content: center;
    align-items: center;

    border-radius: ${borderRadius};
    border: 2px solid black;
    background-color: transparent;
`;

export const TextLogin = styled.Text`
    font-size: 35px;
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    color: ${({ theme }) => theme.COLORS.GREEN_400};
`;

export const ButtonRecoverPassword = styled.TouchableOpacity`
    margin-top: 30px;

    width: ${widthButton};
    height: ${heightButton};

    justify-content: center;
    align-items: center;

    background-color: transparent;
`;

export const TextRecoverPassword = styled.Text`
    font-size: 22px;
    text-decoration: underline;
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.TEXT};
`;