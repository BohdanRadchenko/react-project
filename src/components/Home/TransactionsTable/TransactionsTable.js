/*eslint-disable*/
import React from 'react';
import styles from './TransactionsTable.module.css';
import shortid from 'shortid';

const getMonth = month => {
  switch (month) {
    case 'Jan':
      return '01';
    case 'Feb':
      return '02';
    case 'Mar':
      return '03';
    case 'Apr':
      return '04';
    case 'May':
      return '05';
    case 'Jun':
      return '06';
    case 'Jul':
      return '07';
    case 'Aug':
      return '08';
    case 'Sep':
      return '09';
    case 'Oct':
      return '10';
    case 'Nov':
      return '11';
    case 'Dec':
      return '12';
    default:
      return 'Month';
  }
};

const styleByType = {
  classBase: styles.tr,
  inc: styles.inc,
  con: styles.con,
  incColor: styles.incColor,
  conColor: styles.conColor,
  amount: styles.td,
};

const date = date => {
  const newDate = new Date(date);
  const dateRes = String(newDate);
  const month = dateRes.substr(4, 3);
  const day = dateRes.substr(8, 2);
  const year = dateRes.substr(10, 5);
  const yearRes = year.substr(1);
  const result = `${day}.${getMonth(month)}.${yearRes}`;
  return result;
};

const separationNumber = n => {
  // const result = n.toLocaleString('usd');

  const result = String(n).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

  return result;
};

// const rr = 1000.55;
const x = 12232313131.313131;
const res = x =>
  x.replace(/.+?(?=\D|$)/, function(f) {
    return f.replace(/(\d)(?=(?:\d\d\d)+$)/g, '$1 ');
  });

console.log(res(x));

// console.log(separationNumber(1000.5));

// console.log('result', separationNumber(1000));

const TransactionsTable = ({ items }) => {
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
                key={shortid.generate()}
                className={
                  item.type === '-'
                    ? `${styleByType.classBase} ${styleByType.con}`
                    : `${styleByType.classBase} ${styleByType.inc}`
                }
              >
                <td className={styles.td} data-label="Date">
                  {date(item.date)}
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
                    {item.amount}
                  </span>
                </td>
                <td className={styles.td} data-label="Balance">
                  {item.balanceAfter.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionsTable;
