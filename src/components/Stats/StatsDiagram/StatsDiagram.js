import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-labels';

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

const Chart = props => <Pie data={props.items} options={options} />;
export default Chart;
