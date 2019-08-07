import React from 'react';
import PropTypes from 'prop-types';

const StatsTable = ({ items }) => {
  return (
    <ul>
      {items.map(el => (
        <li key={el.id}>
          <p>{el.amount}</p>
          <p>{el.balanceAfter}</p>
          <p>{el.category}</p>
          <p>{el.comments}</p>
          <p>{el.data}</p>
          <p>{el.isAmountNull}</p>
          <p>{el.type}</p>
        </li>
      ))}
    </ul>
  );
};

StatsTable.defaultProps = {
  items: [],
};

StatsTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      balanceAfter: PropTypes.number,
      category: PropTypes.string,
      comments: PropTypes.string,
      data: PropTypes.string,
      isAmountNull: PropTypes.bool,
      type: PropTypes.string,
    }),
  ),
};

export default StatsTable;
