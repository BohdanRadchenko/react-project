/*eslint-disable*/
const filterItems = (items, year, month) => {
  if (items.length === 0) {
    return null;
  }
  if (month && year) {
    const filtred = items.filter(
      el => el.data.split('-')[0] === year && el.data.split('-')[1] === month,
    );
    return filtred;
  }
};

export default filterItems;
