export const transactionTypes = {
  COST: 'COST',
  INCOME: 'INCOME',
};

export const addIncomeTransaction = transaction => ({
  type: transactionTypes.INCOME,
  payload: transaction,
});

export const addCostTransaction = transaction => ({
  type: transactionTypes.COST,
  payload: transaction,
});
