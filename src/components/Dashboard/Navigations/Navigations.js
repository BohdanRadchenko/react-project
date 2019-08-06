import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './Navigations.module.css';
// import Home from '../../Home/Home';
// import Stats from '../../Stats/Stats';
// import Currencies from '../Currencies/Currencies';

const Navigations = () => {
  return (
    <div className={Styles.nav}>
      <NavLink className={Styles.navLink} to="/home">
        Главная
      </NavLink>
      <NavLink className={Styles.navLink} to="/stats">
        Статистика
      </NavLink>
      <NavLink className={Styles.navLink} to="/currencies">
        Валюта
      </NavLink>
    </div>
  );
};

export default Navigations;
