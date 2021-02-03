import React from 'react';
import MainButton from '../components/Button';
import Navigation from '../components/Navigation';
import styles from './Header.module.css'


const Header = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                I am a front end developer, specialising in brochure website for small businesses. I create accessible and search engine friendly solutions to be viewed on any screen size.
                </div>
                <MainButton mail='kreftpaulinaa@gmail.com' title="Contact me"></MainButton>
            </div>
        </>
    )
}

export default Header