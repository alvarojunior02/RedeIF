import styled from 'styled-components/native';

import {
    widthButton,
    heightButton,
    borderRadius
} from '../../config/pixels';

export const Container = styled.View`
    flex: 1;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
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
    color: ${({ theme }) => theme.COLORS.TEXT};;

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
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    color: ${({ theme }) => theme.COLORS.GREEN_400};
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
    color: ${({ theme }) => theme.COLORS.YELLOW_600};
`;

export const TextVersion = styled.Text`
    font-size: 22px;
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    color: ${({ theme }) => theme.COLORS.TEXT};

    margin-top: 30px;
`;