import React from 'react';
import PropTypes from 'prop-types';
import Navigations from '../Navigations/Navigations';
import Balance from '../Balance/Balance';
import Currencies from '../Currencies/Currencies';
import css from './Sidebar.module.css';

const Sidebar = ({ balance }) => (
  <div className={css.container}>
    <Navigations />
    <Balance balance={balance} />
    <Currencies />
  </div>
);

Sidebar.propTypes = {
  balance: PropTypes.string.isRequired,
};

export default Sidebar;
