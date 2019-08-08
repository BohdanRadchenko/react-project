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
      return 'Hello';
  }
};

const getDate = date => {
  const newDate = new Date(date);
  const dateRes = String(newDate);
  const month = dateRes.substr(4, 3);
  const day = dateRes.substr(8, 2);
  const year = dateRes.substr(10, 5);
  const yearRes = year.substr(1);
  const result = `${day}.${getMonth(month)}.${yearRes}`;
  return result;
};

export default getDate;
