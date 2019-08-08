import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './Navigations.module.css';

const Navigations = () => {
  return (
    <div className={Styles.nav}>
      <NavLink to="/dashboard/home" exact className={Styles.navLink}>
        <button
          type="button"
          className={`${Styles.navLinkBtn} ${Styles.navLinkBtnHome}`}
        />
        <p className={Styles.navText}>Главная</p>
      </NavLink>
      <NavLink to="/dashboard/stats" className={Styles.navLink}>
        <button
          type="button"
          className={`${Styles.navLinkBtn} ${Styles.navLinkBtnStats}`}
        />
        <p className={Styles.navText}>Статистика</p>
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
