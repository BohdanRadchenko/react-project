/*eslint-disable*/
const filterItems = (items, year, month) => {
  if (items.length !== 0) {
    if (month && year) {
      const filtred = items.filter(
        el =>
          new Date(el.date).toDateString().includes(month) &&
          new Date(el.date).toDateString().includes(year),
      );
      return filtred;
    }
  }
};

export default filterItems;
