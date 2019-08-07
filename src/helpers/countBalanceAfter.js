const countSum = (transactions, type) =>
  transactions
    .filter(transaction => transaction.type === type)
    .reduce((acc, transaction) => transaction.amount + acc, 0);

export const countBalanceAfter = (transactions, transactionToAdd) => {
  if (transactions) {
    return (
      countSum(transactions, '+') -
      countSum(transactions, '-') +
      (transactionToAdd.type === '+'
        ? transactionToAdd.amount
        : -transactionToAdd.amount)
    );
  }
  return transactionToAdd.type === '+'
    ? transactionToAdd.amount
    : -transactionToAdd.amount;
};

export const countTypeBalanceAfter = balance => (balance >= 0 ? '+' : '-');
