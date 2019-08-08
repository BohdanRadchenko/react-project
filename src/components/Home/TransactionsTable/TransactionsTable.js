/*eslint-disable*/

import React from 'react';
import styles from './TransactionsTable.module.css';
// import AddButton from '../AddButton/AddButton'

const substring = str => {
  const newStr = String(str);
  return newStr.substr(0, 8);
};

const styleByType = {
  classBase: styles.tr,
  inc: styles.inc,
  con: styles.con,
  incColor: styles.incColor,
  conColor: styles.conColor,
  amount: styles.td,
};

const TransactionHistory = ({ items }) => {
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
            {items.map(item => (
              <tr
                key={item._id}
                className={
                  item.type === '-'
                    ? styleByType.classBase + ' ' + styleByType.con
                    : styleByType.classBase + ' ' + styleByType.inc
                }
              >
                <td className={styles.td} data-label="Дата">
                  {substring(item.date)}
                </td>
                <td className={styles.td} data-label="Тип">
                  {item.type}
                </td>

                <td className={styles.td} data-label="Категория">
                  {item.type === '-' ? item.category : 'Pегулярный доход'}
                </td>

                <td className={styles.td} data-label="Комментарий">
                  {item.comments}
                </td>

                <td className={styleByType.amount} data-label="Сума">
                  <span
                    className={
                      item.type === '-'
                        ? styleByType.conColor
                        : styleByType.incColor
                    }
                  >
                    {item.amount}
                  </span>
                </td>
                <td className={styles.td} data-label="Баланс">
                  {item.balanceAfter}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <AddButton /> */}
      </div>
    </>
  );
};

export default TransactionHistory;
