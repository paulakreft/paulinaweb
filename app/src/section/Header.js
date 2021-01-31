import React from 'react';
import MainButton from '../components/Button';
import Container from '@material-ui/core/Container';
import Navigation from '../components/Navigation';
import styles from './Header.module.css'


const Header = () => {
    return (
        <Container>
            <Navigation></Navigation>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    Standardowy blok Lorem Ipsum, używany od XV wieku, jest odtworzony niżej dla zainteresowanych. Fragmenty 1.10.32 i 1.10.33 z „de Finibus Bonorum et Malorum” Cycerona, są odtworzone w dokładnej, oryginalnej formie, wraz z angielskimi tłumaczeniami H. Rackhama z 1914 roku.
            </div>
                <MainButton title="Paulina"></MainButton>
            </div>
        </Container>
    )
}

export default Header