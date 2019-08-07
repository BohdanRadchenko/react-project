import React from 'react';
import PropTypes from 'prop-types';

const StatsTable = ({ items }) => {
  return (
    <ul>
      {items.map(el => (
        <li key={el.id}>
          <p>amount: {el.amount}</p>
          <p>balanceAfter: {el.balanceAfter}</p>
          <p>category: {el.category}</p>
          <p>comments: {el.comments}</p>
          <p>data: {el.data}</p>
          <p>isAmountNull: {el.isAmountNull}</p>
          <p>type: {el.type}</p>
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
