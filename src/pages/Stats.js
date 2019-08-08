/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatsDiagram from '../components/Stats/StatsSelect/StatsDiagram';
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
    chart: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
        },
      ],
    },
  };
  colorSwitch = value => {
    switch (value) {
      case 'Category':
        return 'transparent';
      case 'regular':
        return '#ECB22A';
      case 'food':
        return '#E28B20';
      case 'automobile':
        return '#D25925';
      case 'self care':
        return '#67B7D0';
      case 'children':
        return '#5593D7';
      case 'home':
        return '#3E6BA8';
      case 'education':
        return '#9CC254';
      case 'enterteinment':
        return '#73AD57';
      case 'other':
        return '#507C3A';
    }
  };
  componentDidMount() {
    const transactions = this.props.transactions;
    this.setState({
      items: [...this.props.transactions],
      balance: statisticsCount(transactions).balance,
      deposits: statisticsCount(transactions).deposits,
      withdrow: statisticsCount(transactions).withdrow,
      test: [
        ...this.props.transactions
          .filter(el => el.type === '-')
          .map(el => ({
            category: `${el.category}`,
            amount: el.amount,
          })),
      ],
      chart: {
        labels: [...new Set(a.map(el => el.category))],
        datasets: [
          {
            data: [
              ...new Set(a.map(el => this.reduceSwitcher(el.category, a))),
            ],
            backgroundColor: [
              ...new Set(a.map(el => this.colorSwitch(el.category))),
            ],
          },
        ],
      },
    });
    const statsTableLines = document.getElementsByClassName('rt-tr');
    for (let item of statsTableLines) {
      console.log(item.children[0].textContent);
      item.insertAdjacentHTML(
        'afterbegin',
        `<div style="background-color: ${this.colorSwitch(
          item.children[0].textContent,
        )}" class="two"></div>`,
      );
    }
  }

  reduceSwitcher = (category, arr) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const categoryReducer = arr
      .filter(el => el.category === category)
      .map(el => el.amount)
      .reduce(reducer);
    switch (category) {
      case 'regular':
        return categoryReducer;
      case 'food':
        return categoryReducer;
      case 'automobile':
        return categoryReducer;
      case 'self care':
        return categoryReducer;
      case 'children':
        return categoryReducer;
      case 'home':
        return categoryReducer;
      case 'education':
        return categoryReducer;
      case 'enterteinment':
        return categoryReducer;
      case 'other':
        return categoryReducer;
    }
  };

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
    console.log(a);

    const { search, items } = this.state;
    const filtredItems = filterItems(items, search.year, search.month);
    return (
      <div className={styles.container}>
        <div className={styles.innerTitle}>
          <h2 className={styles.title}>Statistics</h2>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.innerDiagramContainer}>
            <div className={styles.innerDiagram}>
              <StatsDiagram items={this.state.chart} />
            </div>
          </div>

          <div className={styles.innerStatsContainer}>
            <div className={styles.statsSelectContainer}>
              <div className={styles.innerSelectMonth}>
                <StatsSelect
                  options={OptionsMonth}
                  handleSelect={this.getSelectMonth}
                />
              </div>
              <div className={styles.innerSelectYear}>
                <StatsSelect
                  options={OptionsYears}
                  handleSelect={this.getSelectYears}
                />
              </div>
            </div>
            <div className={styles.innerTable}>
              <StatsTable items={this.state.test} />
            </div>
            <div className={styles.total}>
              <div className={styles.containerText}>
                <p className={styles.costs}>Costs:</p>
                <p className={styles.income}>Income:</p>
              </div>
              <div className={styles.containerAmount}>
                <p className={styles.costsTotal}>
                  {new Intl.NumberFormat('ru', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(this.state.withdrow)}
                </p>
                <p className={styles.incomeTotal}>
                  {new Intl.NumberFormat('ru', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(this.state.deposits)}
                </p>
              </div>
            </div>
          </div>
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
