import styled from 'styled-components/native'

export const Container = styled.View`
    margin-top: 10px;
    padding: 0 20px;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    width: 100%;    
    height: 120px;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: 40px;
    height: 40px;
`;

export const Logo = styled.Image`
    width: 60px;
    height: 60px;
`;