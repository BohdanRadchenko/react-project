/* eslint-disable */
import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import './StatsTable.css';

const DiagramTable = props => {
  const { items } = props;
  return (
    <>
      <ReactTable
        key={items.length}
        data={items.reverse()}
        columns={[
          {
            Header: 'Category',
            accessor: 'category',
          },
          {
            Header: 'Amount',
            accessor: 'amount',
          },
        ]}
        defaultPageSize={items.length}
        showPagination={false}
        filtered={[]}
        onClick={() => null}
      />
    </>
  );
};

export default DiagramTable;

DiagramTable.defaultProps = {
  items: [],
};
DiagramTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ),
};
