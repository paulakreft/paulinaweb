import React from 'react';
import MainButton from '../components/Button';
import { Typography } from '@material-ui/core';

import Image from '../img/background.jpg';



const Header = () => {
    return (
        <div className="header_background"
            style={{ 'backgroundImage': `url(${Image})`, 'width': '100%', 'height': '600px', 'backgroundSize': 'cover' }}
        >
            <Typography variant='subtitle1'>
                Standardowy blok Lorem Ipsum, używany od XV wieku, jest odtworzony niżej dla zainteresowanych. Fragmenty 1.10.32 i 1.10.33 z „de Finibus Bonorum et Malorum” Cycerona, są odtworzone w dokładnej, oryginalnej formie, wraz z angielskimi tłumaczeniami H. Rackhama z 1914 roku.
            </Typography>
            <MainButton title="Paulina"></MainButton>
        </div>

    )
}

export default Header