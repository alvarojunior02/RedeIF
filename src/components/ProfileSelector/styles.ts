import styled from "styled-components/native";

import { borderRadius } from "../../config/pixels";

export const Container = styled.ScrollView`
    flex: 1;
    align-self: center;
    width: 90%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const SelectableProfile = styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    margin: 0 10px;
    padding: 10px;
    border-radius: ${borderRadius};
    border: ${({ disabled }) => disabled ? '2px solid black' : 'none'};
`;

export const ProfileImage = styled.Image`
    width: 60px;
    height: 60px;
`;