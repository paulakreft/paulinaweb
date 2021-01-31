import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Navigation.module.css';

const Navigation = () => {
      return (
        <ul className={styles.menu}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Github</MenuItem>
            <MenuItem>Linkedin</MenuItem>
        </ul>
      );
    }

export default Navigation