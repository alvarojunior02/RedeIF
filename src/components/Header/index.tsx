import React from 'react';

import {
    Container,
    Button,
    Image,
    Logo,
} from './styles';

import iconBack from '../../assets/icons/arrow.png';
import iconInformation from '../../assets/icons/information.png';
import logo from '../../assets/logo.png';

const Header = ({navigation}: any) => {
  return (
    <>
        <Container>
            <Button
                onPress={() => navigation.goBack(null)}
            >
                <Image source={iconBack}/>
            </Button>
            
            <Logo source={logo}/>

            <Button>
                <Image source={iconInformation}/>
            </Button>
        </Container>
    </>
  );
}

export default Header;