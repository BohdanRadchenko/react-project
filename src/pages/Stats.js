/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatsDiagram from '../components/Stats/StatsDiagram/StatsDiagram';
import StatsTable from '../components/Stats/StatsTable/StatsTable';
import StatsSelect from '../components/Stats/StatsSelect/StatsSelect';
import db from '../db.json';
import OptionsMonth from '../components/Stats/Options/OptionsMonth';
import OptionsYears from '../components/Stats/Options/OptionsYear';
import statisticsCount from '../helpers/statisticsCount';
import filterItems from '../helpers/filterItems';

class Stats extends Component {
  state = {
    items: [],
    balance: 0,
    deposits: 0,
    withdrow: 0,
    search: {
      month: null,
      year: null,
    },
  };

  componentDidMount() {
    const transactions = this.props.transactions;
    this.setState({
      items: [...this.props.transactions],
      balance: statisticsCount(transactions).balance,
      deposits: statisticsCount(transactions).deposits,
      withdrow: statisticsCount(transactions).withdrow,
    });
  }

  getSelectMonth = ({ value }) => {
    this.setState(state => ({
      search: Object.assign(state.search, { month: value }),
    }));
  };

  getSelectYears = ({ value }) => {
    this.setState(state => ({
      search: Object.assign(state.search, { year: value }),
    }));
  };

  render() {
    const { search, items } = this.state;
    const filtredItems = filterItems(items, search.year, search.month);
    console.log(filtredItems);
    return (
      <div>
        <StatsSelect
          options={OptionsMonth}
          handleSelect={this.getSelectMonth}
        />
        <StatsSelect
          options={OptionsYears}
          handleSelect={this.getSelectYears}
        />
        {filterItems.map(el => (
          <>
            <StatsDiagram {...el} />
            <StatsTable {...el} />
          </>
        ))}
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
