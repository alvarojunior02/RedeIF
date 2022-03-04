import React, { useState } from 'react';

import man1 from '../../assets/profileIcons/man1.png';
import man2 from '../../assets/profileIcons/man2.png';
import man3 from '../../assets/profileIcons/man3.png';
import man4 from '../../assets/profileIcons/man4.png';
import man5 from '../../assets/profileIcons/man5.png';
import man6 from '../../assets/profileIcons/man6.png';
import man7 from '../../assets/profileIcons/man7.png';
import man8 from '../../assets/profileIcons/man8.png';

import woman1 from '../../assets/profileIcons/woman1.png';
import woman2 from '../../assets/profileIcons/woman2.png';
import woman3 from '../../assets/profileIcons/woman3.png';
import woman4 from '../../assets/profileIcons/woman4.png';
import woman5 from '../../assets/profileIcons/woman5.png';
import woman6 from '../../assets/profileIcons/woman6.png';
import woman7 from '../../assets/profileIcons/woman7.png';
import woman8 from '../../assets/profileIcons/woman8.png';

import {
    Container,
    SelectableProfile,
    ProfileImage
} from './styles'

const ProfileSelector = ({onUpdate, value}: any) => {
    const profileImages = [
        {
            id: 'm1',
            image: man1,
        },
        {
            id: 'w1',
            image: woman1,
        },
        {
            id: 'm2',
            image: man2,
        }, 
        {
            id: 'w2',
            image: woman2,
        },
        {
            id: 'm3',
            image: man3,
        },
        {
            id: 'w3',
            image: woman3,
        }, 
        {
            id: 'm4',
            image: man4,
        },
        {
            id: 'w4',
            image: woman4,
        },  
        {
            id: 'm5',
            image: man5,
        },
        {
            id: 'w5',
            image: woman5,
        },  
        {
            id: 'm6',
            image: man6,
        },
        {
            id: 'w6',
            image: woman6,
        },  
        {
            id: 'm7',
            image: man7,
        },
        {
            id: 'w7',
            image: woman7,
        },  
        {
            id: 'm8',
            image: man8,
        },
        {
            id: 'w8',
            image: woman8,
        }, 
    ];

    return (
        <>
            <Container
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    profileImages.map(item => {
                        return(
                            <>
                                <SelectableProfile
                                    key={item.id}
                                    onPress={() => onUpdate(item.id)}
                                    disabled={value === item.id ? true : false}
                                >
                                    <ProfileImage source={item.image}/>
                                </SelectableProfile>
                            </>
                        )
                    })
                }
            </Container>
        </>
    );
}

export default ProfileSelector;