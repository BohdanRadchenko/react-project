import React from 'react';
import PropTypes from 'prop-types';
import Balance from '../Balance/Balance';

const Sidebar = ({ balance }) => (
  <div>
    <Balance balance={balance} />
  </div>
);

Sidebar.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Sidebar;
