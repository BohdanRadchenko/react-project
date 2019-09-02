import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-labels';
import colorSwitcher from '../../../helpers/colorSwitcher';

const options = {
  plugins: {
    labels: [
      {
        render: 'percent',
        position: 'outside',
        overlap: true,
        fontSize: 10,
      },
    ],
  },
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    position: 'bottom',
    display: true,
    labels: {
      boxWidth: 12,
    },
  },
};

const Chart = props => {
  const { items } = props;
  const filterByWithdraw = items
    .filter(el => el.type === '-')
    .map(el => ({
      category: `${el.category}`,
      amount: el.amount,
    }));

  const categoryReducer = value =>
    filterByWithdraw
      .filter(el => el.category === value)
      .map(el => el.amount)
      .reduce((result, num) => {
        return result + num;
      }, 0);

  const data = {
    chart: {
      labels: [
        'Main Expenses',
        'Food',
        'Car',
        'Self Care',
        'Child Care',
        'House',
        'Education',
        'Enterteinment',
        'Others',
      ],
      datasets: [
        {
          data: [
            categoryReducer('Main Expenses'),
            categoryReducer('Food'),
            categoryReducer('Car'),
            categoryReducer('Self Care'),
            categoryReducer('Child Care'),
            categoryReducer('House'),
            categoryReducer('Education'),
            categoryReducer('Enterteinment'),
            categoryReducer('Others'),
          ],
          backgroundColor: [
            colorSwitcher('Main Expenses'),
            colorSwitcher('Food'),
            colorSwitcher('Car'),
            colorSwitcher('Self Care'),
            colorSwitcher('Child Care'),
            colorSwitcher('House'),
            colorSwitcher('Education'),
            colorSwitcher('Enterteinment'),
            colorSwitcher('Others'),
          ],
        },
      ],
    },
  };

  return <Pie data={data.chart} options={options} />;
};

Chart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Chart;
