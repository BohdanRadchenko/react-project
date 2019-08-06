import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './Navigations.module.css';
// import Home from '../../Home/Home';
// import Stats from '../../Stats/Stats';
// import Currencies from '../Currencies/Currencies';

const Navigations = () => {
  return (
    <div className={Styles.nav}>
      <NavLink to="/home" className={Styles.navLink}>
        <button
          type="button"
          className={`${Styles.navLinkBtn} ${Styles.navLinkBtnHome}`}
        />
      </NavLink>
      <NavLink to="/stats" className={Styles.navLink}>
        <button
          type="button"
          className={`${Styles.navLinkBtn} ${Styles.navLinkBtnStats}`}
        />
      </NavLink>
      <NavLink to="/currencies">
        <button
          type="button"
          className={`${Styles.navLinkBtn} ${Styles.navLinkBtnCurr}`}
        />
      </NavLink>
    </div>
  );
};

export default Navigations;
