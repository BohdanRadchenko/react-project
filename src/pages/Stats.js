/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatsDiagram from '../components/Stats/StatsDiagram/StatsDiagram';
import StatsTable from '../components/Stats/StatsTable/StatsTable';
import db from '../db.json';
import DatePicker from 'react-date-picker';

const stateSum = items => {
  const depositsArr = items.filter(el => el.type === '+');
  const depositsSumm = depositsArr.reduce((acc, el) => (acc += el.amount), 0);
  const withdrowArr = items.filter(el => el.type === '-');
  const withdrowSumm = withdrowArr.reduce((acc, el) => (acc += el.amount), 0);
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
    items: [],
    balance: 0,
    deposits: 0,
    withdrow: 0,
  };

  componentDidMount() {
    const transactions = this.props.transactions;
    this.setState({
      items: [...this.props.transactions],
      balance: stateSum(transactions).balance,
      deposits: stateSum(transactions).deposits,
      withdrow: stateSum(transactions).withdrow,
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <DatePicker />
        <StatsDiagram items={items} />
        <StatsTable items={items} />
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
