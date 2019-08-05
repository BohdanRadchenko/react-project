/*eslint-disable*/

import React from 'react';
import styles from './Table.module.css';
import ob from '../Components/ob.json';

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
              <tr className={styles.tr}>
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

        <button className={styles.button}>+</button>
      </div>
    </>
  );
};

export default TransactionHistory;
