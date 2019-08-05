/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatsDiagram from '../components/Stats/StatsDiagram/StatsDiagram';
import StatsTable from '../components/Stats/StatsTable/StatsTable';
import db from '../db.json';

const stateSum = items => {
  const depositsArr = items.filter(el => el.type === 'Deposits');
  const depositsSumm = depositsArr.reduce(
    (acc, el) => (acc += el.inputValue),
    0,
  );
  const withdrowArr = items.filter(el => el.type === 'Withdrow');
  const withdrowSumm = withdrowArr.reduce(
    (acc, el) => (acc += el.inputValue),
    0,
  );
  const newBalance = depositsSumm - withdrowSumm;

  const stateObj = {
    balance: newBalance,
    deposits: depositsSumm,
    withdrow: withdrowSumm,
  };
  return stateObj;
};

class Stats extends Component {
  state = {
    transactions: [],
    items: db,
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <StatsDiagram />
        <StatsTable />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: db,
});

export default connect(
  mapStateToProps,
  null,
)(Stats);
