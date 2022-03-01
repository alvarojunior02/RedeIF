import React from 'react';

import {
    Container,
    Image,
} from './styles';

const icon = require('../../assets/icons/arrow.png');

const IconBack = () => {
  return (
    <>
        <Container>
            <Image source={icon}/>
        </Container>
    </>
  );
}

export default IconBack;

