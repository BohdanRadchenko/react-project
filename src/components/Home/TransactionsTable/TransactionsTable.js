/*eslint-disable*/

import React from 'react';
import styles from './TransactionsTable.module.css';

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
              <th className={styles.th}>Date</th>
              <th className={styles.th}>Type</th>
              <th className={styles.th}>Category</th>
              <th className={styles.th}>Comments</th>
              <th className={styles.th}>Amount</th>
              <th className={styles.th}>Balance</th>
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
                <td className={styles.td} data-label="Date">
                  {substring(item.date)}
                </td>
                <td className={styles.td} data-label="Type">
                  {item.type}
                </td>

                <td className={styles.td} data-label="Category">
                  {item.type === '-' ? item.category : 'Regular income'}
                </td>

                <td className={styles.td} data-label="Comments">
                  {item.comments}
                </td>

                <td className={styleByType.amount} data-label="Amount">
                  <span
                    className={
                      item.type === '-'
                        ? styleByType.conColor
                        : styleByType.incColor
                    }
                  >
                    {item.amount.toFixed(2)}
                  </span>
                </td>
                <td className={styles.td} data-label="Balance">
                  {item.balanceAfter.toFixed(2)}
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
