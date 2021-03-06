import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './Navigations.module.css';

const Navigations = () => {
  return (
    <div className={Styles.nav}>
      <NavLink
        to="/dashboard/home"
        exact
        className={Styles.navLink}
        activeClassName={Styles.navLinkActive}
      >
        <button
          type="button"
          className={`${Styles.navLinkBtn} ${Styles.navLinkBtnHome}`}
        />
        <p className={Styles.navText}>Home</p>
      </NavLink>
      <NavLink
        to="/dashboard/stats"
        className={Styles.navLink}
        activeClassName={Styles.navLinkActive}
      >
        <button
          type="button"
          className={`${Styles.navLinkBtn} ${Styles.navLinkBtnStats}`}
        />
        <p className={Styles.navText}>Statistics</p>
      </NavLink>
      <NavLink
        to="/dashboard/currencies"
        activeClassName={Styles.navLinkActive}
      >
        <button
          type="button"
          className={`${Styles.navLinkBtn} ${Styles.navLinkBtnCurr}`}
        />
      </NavLink>
    </div>
  );
};

export default Navigations;
