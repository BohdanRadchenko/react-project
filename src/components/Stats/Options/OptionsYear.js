const OptionsYears = items => {
  const date = items.map(el => new Date(el.date).toLocaleDateString());
  const year = date.map(el => el);
  const filtDate = year.filter(el => el !== 'Invalid Date');
  const filt = filtDate.map(el => el.slice(6));

  const set = Array.from(new Set(filt));
  const options = set.map(el => {
    const obj = {
      value: el,
      label: el,
    };
    return obj;
  });

  return options;
};

export default OptionsYears;
