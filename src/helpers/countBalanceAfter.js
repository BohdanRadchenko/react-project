export const countBalanceAfter = (transactions, transactionToAdd) => {
  if (transactions) {
    return (
      transactions
        .filter(transaction => transaction.type === '+')
        .reduce((acc, transaction) => transaction.amount + acc, 0) -
      transactions
        .filter(transaction => transaction.type === '-')
        .reduce((acc, transaction) => transaction.amount + acc, 0) +
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
