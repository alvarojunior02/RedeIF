import React from 'react';

import {
    Container,
    Image,
} from './styles';

const icon = require('../../assets/icons/information.png');

const IconInformation = () => {
  return (
    <>
        <Container>
            <Image source={icon}/>
        </Container>
    </>
  );
}

export default IconInformation;

