const categoryReducer = (arr, type, category) =>
  Object.assign(
    [],
    arr
      .filter(el => el.type === type)
      .map(el => ({
        category: el.category,
        amount: el.amount,
      })),
  )
    .filter(el => el.category === category)
    .map(el => el.amount)
    .reduce(function(result, num) {
      return result + num;
    }, 0);

export default categoryReducer;
