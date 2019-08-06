/*eslint-disable*/

import React from 'react';
import styles from './TransactionsTable.module.css';

// const currentBalance =(balance,tr,type)=>{
// // if(type === '-'){
// //   return balance - tr
// // }else

// type ==='-'?balance-tr?bala
// }

const substring = str => {
  const newStr = String(str);
  return newStr.substr(0, 8);
};

// console.log('13:45.1.1.11 PM'.substr(0, 8));

const styleByType = {
  classBase: styles.tr,
  inc: styles.inc,
  con: styles.con,
  incColor: styles.incColor,
  conColor: styles.conColor,
  amount: styles.td,
};

// type: transactions.INCOME,
// amount: '',
// comment: '',
// date: new Date(),
// category: null,

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
                  {item.category}
                </td>
                <td className={styles.td} data-label="Комментарий">
                  {item.comment}
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
