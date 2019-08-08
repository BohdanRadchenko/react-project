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
import styles from '../components/Stats/Stats.module.css';

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

  getSelectMonth = options => {
    this.setState(state => ({
      search: Object.assign(state.search, { month: options.value }),
    }));
  };

  getSelectYears = options => {
    this.setState(state => ({
      search: Object.assign(state.search, { year: options.value }),
    }));
  };

  render() {
    const { search, items, selectedOption } = this.state;
    const filtredItems = filterItems(items, search.year, search.month);
    return (
      <div className={styles.container}>
        <div className={styles.innerTitle}>
          <h2 className={styles.title}>Статистика</h2>
        </div>

        <div className={styles.innerStats}>
          <div className={styles.innerSelectMonth}>
            <StatsSelect
              options={OptionsMonth}
              label={'Month'}
              handleSelect={this.getSelectMonth}
            />
          </div>
          <div className={styles.innerSelectYear}>
            <StatsSelect
              label={'Year'}
              options={OptionsYears}
              handleSelect={this.getSelectYears}
            />
          </div>
        </div>

        <div className={styles.innerDiagram}>
          <StatsDiagram items={filtredItems} />
        </div>
        <div className={styles.innerTable}>
          <StatsTable items={filtredItems} />
        </div>
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
