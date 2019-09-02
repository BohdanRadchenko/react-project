import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import './StatsTable.css';
import styles from '../Stats.module.css';

const DiagramTable = props => {
  const { items } = props;

  const filterBy = type => items.filter(el => el.type === type);

  const data = type =>
    Object.assign(
      [],
      filterBy(type).map(el => ({
        category: el.category,
        amount: el.amount,
      })),
    );

  const withdrawTotal = data('-')
    .map(el => el.amount)
    .reduce((result, num) => {
      return result + num;
    }, 0);

  const depositsTotal = data('+')
    .map(el => el.amount)
    .reduce((result, num) => {
      return result + num;
    }, 0);

  return (
    <>
      <ReactTable
        key={data('-').length}
        data={data('-').reverse()}
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
        defaultPageSize={data('-').length}
        showPagination={false}
      />
      <div className={styles.total}>
        <div className={styles.containerText}>
          <p className={styles.costs}>Costs:</p>
          <p className={styles.income}>Income:</p>
        </div>
        <div className={styles.containerAmount}>
          <p className={styles.costsTotal}>
            {new Intl.NumberFormat('en', {
              style: 'currency',
              currency: 'UAH',
            }).format(withdrawTotal)}
          </p>
          <p className={styles.incomeTotal}>
            {new Intl.NumberFormat('en', {
              style: 'currency',
              currency: 'UAH',
            }).format(depositsTotal)}
          </p>
        </div>
      </div>
    </>
  );
};

export default DiagramTable;

DiagramTable.defaultProps = {
  items: [],
};
DiagramTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any).isRequired),
};
