import React from 'react';
import PropTypes from 'prop-types';
import Navigations from '../Navigations/Navigations';
import Balance from '../Balance/Balance';

const Sidebar = ({ balance }) => (
  <div>
    <Navigations />
    <Balance balance={balance} />
    {/* <Currencies /> */}
  </div>
);

Sidebar.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Sidebar;
