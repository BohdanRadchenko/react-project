import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import './StatsTable.css';

// const a = [
//   // { category: 'education', amount: 522 },
//   // { category: 'home', amount: 420 },
//   // { category: 'self care', amount: 499 },
//   // { category: 'enterteinment', amount: 563 },
//   // { category: 'food', amount: 526 },
//   // { category: 'education', amount: 563 },
//   // { category: 'other', amount: 888 },
//   // { category: 'education', amount: 563 },
//   // { category: 'education', amount: 522 },
//   // { category: 'home', amount: 420 },
//   { category: 'self care', amount: 499 },
//   // { category: 'enterteinment', amount: 563 },
//   { category: 'food', amount: 526 },
//   // { category: 'education', amount: 563 },
//   { category: 'other', amount: 888 },
//   // { category: 'education', amount: 563 },
// ];

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

// DiagramTable.defaultProps = {
//   items: [],
// };
// DiagramTable.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       category: PropTypes.string.isRequired,
//       amount: PropTypes.number.isRequired,
//     }),
//   ),
// };
