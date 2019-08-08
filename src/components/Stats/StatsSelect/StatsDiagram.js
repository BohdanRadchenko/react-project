import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-labels';
import PropTypes from 'prop-types';

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
  return <Pie data={items} options={options} />;
};
export default Chart;

Chart.defaultProps = { items: {} };
Chart.propTypes = {
  items: PropTypes.shape({
    labels: PropTypes.arrayOf,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.arrayOf,
        backgroundColor: PropTypes.arrayOf,
      }),
    ),
  }),
};
