import React, { Component } from 'react';
import StatsDiagram from '../components/Stats/StatsDiagram/StatsDiagram';
import StatsTable from '../components/Stats/StatsTable/StatsTable';

class Stats extends Component {
  state = {};

  render() {
    return (
      <div>
        <StatsDiagram />
        <StatsTable />
      </div>
    );
  }
}

export default Stats;
