/*eslint-disable*/

import React from 'react';
import styles from './TransactionsTable.module.css';
// import ob from '../Components/ob.json';

// import AddButton from '../AddButton/AddButton';

const ob = [
  {
    id: 'ea8ed3dc-2b68-4a53-905a-53ecb0adef33',
    type: '+',
    amount: '527.80',
    ' currency': 'ALL',
  },
  {
    id: 'ea8ed3dc-2b68-4a53-905a-53ecb0adef33',
    type: '-',
    amount: '527.80',
    ' currency': 'ALL',
  },
];

const TransactionHistory = () => {
  return (
    <>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>Дата</th>
              <th className={styles.th}>Тип</th>
              <th className={styles.th}>Категория</th>
              <th className={styles.th}>Комментарий</th>
              <th className={styles.th}>Сума</th>
              <th className={styles.th}>Баланс</th>
            </tr>
          </thead>
          <tbody>
            {ob.map(item => (
              <tr
                className={
                  styles.tr
                  // item.type === '-' ? styles.income : styles.consumption
                }
              >
                <td className={styles.td} data-label="Дата">
                  {item.type}
                </td>
                <td className={styles.td} data-label="Тип">
                  {item.amount}
                </td>
                <td className={styles.td} data-label="Категория">
                  {item.amount}
                </td>
                <td className={styles.td} data-label="Комментарий">
                  {item.amount}
                </td>
                <td className={styles.td} data-label="Сума">
                  {item.amount}
                </td>
                <td className={styles.td} data-label="Баланс">
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionHistory;
