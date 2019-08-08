/*eslint-disable*/
const statisticsCount = items => {
  const depositsArr = items.filter(el => el.type === '+');
  const depositsSumm = depositsArr.reduce((acc, el) => (acc += el.amount), 0);
  const withdrowArr = items.filter(el => el.type === '-');
  const withdrowSumm = withdrowArr.reduce((acc, el) => (acc += el.amount), 0);
  const newBalance = depositsSumm - withdrowSumm;

  const statistics = {
    balance: newBalance,
    deposits: depositsSumm,
    withdrow: withdrowSumm,
  };
  return statistics;
};

export default statisticsCount;
