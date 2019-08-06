/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatsDiagram from '../components/Stats/StatsDiagram/StatsDiagram';
import StatsTable from '../components/Stats/StatsTable/StatsTable';
import StatsSelect from '../components/Stats/StatsSelect/StatsSelect';
import db from '../db.json';
import DatePicker from 'react-date-picker';
import OptionsMonth from '../components/Stats/Options/OptionsMonth';
import OptionsYears from '../components/Stats/Options/OptionsYear';

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
    month: null,
    year: null,
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

  componentDidUpdate(prevProps, prevState) {
    const { items, month, year } = this.state;
    if (prevState.month !== month || prevState.year !== year) {
      this.filterItems(items, year, month);
    }
    // if (prevState.items !== items) {
    //   this.setState({
    //     balance: stateSum(items).balance,
    //     deposits: stateSum(items).deposits,
    //     withdrow: stateSum(items).withdrow,
    //   });
    // }
  }

  getSelectMonth = ({ value }) => {
    this.setState({
      month: value,
    });
  };

  getSelectYears = ({ value }) => {
    this.setState({
      year: value,
    });
  };

  filterItems = (transactions, year, month) => {
    const items = transactions.filter(
      el =>
        el.data.split('-')[0] === `${year}` &&
        el.data.split('-')[1] === `${month}`,
    );
    this.setState({
      items: items,
    });
  };

  // filterItems = items => {
  //   if (items.length > 0) {
  //     const month = '01';
  //     const year = `2018`;
  //     const filterYear = items.filter(
  //       el => el.data.split('-')[0] === `${year}`,
  //     );
  //     console.log(filterYear);
  //     const filterMonth = filterYear.filter(
  //       el => el.data.split('-')[1] === `${month}`,
  //     );
  //     console.log(filterMonth);

  //     const it = items.filter(
  //       el =>
  //         el.data.split('-')[0] === `${year}` &&
  //         el.data.split('-')[1] === `${month}`,
  //     );
  //     console.log(it);
  //   }
  // };

  render() {
    const { items } = this.state;

    return (
      <div>
        <DatePicker />
        <StatsSelect
          options={OptionsMonth}
          handleSelect={this.getSelectMonth}
        />
        <StatsSelect
          options={OptionsYears}
          handleSelect={this.getSelectYears}
        />
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
