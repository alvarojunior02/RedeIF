import styled from "styled-components/native";
import MaskInput from 'react-native-mask-input';

import {
    widthButton,
    heightButton,
    borderRadius
} from '../../config/pixels';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Body = styled.ScrollView`
    flex: 1;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: 32px;

    align-self: center;
`;

export const Label = styled.Text`
    margin-top: 30px;

    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: 24px;

    align-self: flex-start;
    margin-left: 30px;
    margin-bottom: 20px;
`;

export const GenericInput = styled.TextInput`
    margin-top: 10px;

    width: 86%;
    height: 40px;

    align-self: center;

    border: 2px solid black;
    border-radius: ${borderRadius};
    padding-left: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const BiographyInput = styled.TextInput`
    margin-top: 10px;

    width: 86%;
    height: 120px;

    align-self: center;

    text-align-vertical: top;

    border: 2px solid black;
    border-radius: ${borderRadius};
    padding: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const ContainerStyledPicker = styled.View`
    margin-top: 10px;

    width: 86%;
    height: 40px;

    align-self: center;

    border: 2px solid black;
    border-radius: ${borderRadius};
    padding-left: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const StyledPicker = styled.Picker`
    width: 100%;
    height: 40px;
`;

export const BirthDateContainer = styled.View`
    margin-top: 10px;

    width: 86%;
    height: 40px;

    align-self: center;

    flex-direction: row;

    border: 2px solid black;
    border-radius: ${borderRadius};
    padding-left: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const BirthDateInput = styled(MaskInput)`
    width: 86%;
    height: 40px;

    align-self: flex-start;
`;

export const BirthDateIcon = styled.Image`
    width: 35px;
    height: 35px;

    margin-right: 10px;

    align-self: flex-end;
`;

export const AcceptTerms = styled.View`
    margin-top: 45px;

    width: 86%;
    height: 70px;

    align-self: center;

    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const CheckBox = styled.TouchableOpacity`
    width: 40px;
    height: 40px;

    border: 2px solid black;
    border-radius: ${borderRadius};
`;

export const LabelCheckBox = styled.Text`
    margin-left: 30px;

    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: 20px;

    text-align: center;
`;

export const ButtonSingup = styled.TouchableOpacity`
    margin: 70px 0;

    width: ${widthButton};
    height: ${heightButton};

    justify-content: center;
    align-items: center;

    align-self: center;

    border-radius: ${borderRadius};
    border: 2px solid black;
    background-color: transparent;
`;

export const TextSingup = styled.Text`
    font-size: 35px;
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    color: ${({ theme }) => theme.COLORS.GREEN_400};
`;