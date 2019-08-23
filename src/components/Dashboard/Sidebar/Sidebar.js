import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import Navigations from '../Navigations/Navigations';
import Balance from '../Balance/Balance';
import Currencies from '../Currencies/Currencies';
import css from './Sidebar.module.css';

const Sidebar = ({ balance }) => (
  <div className={css.container}>
    <Navigations />
    <Balance balance={balance} />
    <Media query="(min-width: 767px)" render={() => <Currencies />} />
  </div>
);

Sidebar.propTypes = {
  balance: PropTypes.string.isRequired,
};

export default Sidebar;
