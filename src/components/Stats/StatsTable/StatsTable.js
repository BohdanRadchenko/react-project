/* eslint-disable */
/* eslint-disable */
import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import './StatsTable.css';

const DiagramTable = props => {
  const { items } = props;
  // console.log(items);

  const filterByWithdraw = items
    .filter(el => el.type === '-')
    .map(el => ({
      category: `${el.category}`,
      amount: el.amount,
    }));
  const data = Object.assign(
    [],
    filterByWithdraw.map(el => ({ category: el.category, amount: el.amount })),
  );

  return (
    <>
      <ReactTable
        key={data.length}
        data={data.reverse()}
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
        defaultPageSize={data.length}
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
