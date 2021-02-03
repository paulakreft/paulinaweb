import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Navigation.module.css';
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import home from "../img/home.svg";


const Navigation = () => {
  const items = [
    {
      id: 'home',
      href: '/paulinaweb',
      icon: home
    },
    {
      id: 'github',
      href: 'https://github.com/paulakreft',
      icon: github
    }, {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/kreftpaulinaa/',
      icon: linkedin
    },

  ]
  return (
    <div className={styles.menu}>
      <div className={styles.contact}>
        <h1>Paulina Kreft</h1>
        <p>junior front-end developer</p>
      </div>
      <ul className={styles.menuWrapper}>
        {items.map(item => (
          <MenuItem
            key={item.id}
          ><a href={item.href}>
              <img src={item.icon} />
            </a>
          </MenuItem>
        ))}
      </ul>
    </div>
  );
}

export default Navigation