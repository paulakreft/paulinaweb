import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.menu}>
      <h1>Paulina Kreft</h1>
      <ul className={styles.menuWrapper}>
        <MenuItem>Home</MenuItem>
        <MenuItem>Github</MenuItem>
        <MenuItem>Linkedin</MenuItem>
      </ul>
    </div>
  );
}

export default Navigation