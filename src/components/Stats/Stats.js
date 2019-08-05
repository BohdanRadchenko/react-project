import React, { Component } from 'react';
import StatsTable from './StatsTable/StatsTable';
import StatsDiagram from './StatsDiagram/StatsDiagram';

class Stats extends Component {
  state = {};

  render() {
    return (
      <div>
        <p>Stats</p>
        <StatsDiagram />
        <StatsTable />
      </div>
    );
  }
}

export default Stats;
