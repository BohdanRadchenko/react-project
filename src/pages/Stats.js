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
    costsFilter: [],
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
    const filteredCost = transactions
      .filter(el => el.type === '-')
      .map(el => ({
        category: `${el.category}`,
        amount: el.amount,
      }));

    this.setState({
      items: [...this.props.transactions],
      balance: statisticsCount(transactions).balance,
      deposits: statisticsCount(transactions).deposits,
      withdrow: statisticsCount(transactions).withdrow,
      costsFilter: [
        ...transactions
          .filter(el => el.type === '-')
          .map(el => ({
            category: `${el.category}`,
            amount: el.amount,
          })),
      ],
      chart: {
        labels: [...new Set(filteredCost.map(el => el.category))],
        datasets: [
          {
            data: [
              ...new Set(
                filteredCost.map(el =>
                  this.reduceSwitcher(el.category, filteredCost),
                ),
              ),
            ],
            backgroundColor: [
              ...new Set(filteredCost.map(el => this.colorSwitch(el.category))),
            ],
          },
        ],
      },
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.costsFilter) {
      const statsTableLines = document.getElementsByClassName('rt-tr');
      for (let item of statsTableLines) {
        item.insertAdjacentHTML(
          'afterbegin',
          `<div style="background-color: ${this.colorSwitch(
            item.children[0].textContent,
          )}" class="two"></div>`,
        );
      }
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
  // test = (category, arr) => {
  //   const array = [null, null, null, null, null, null, null, null];

  //   const categoryReducer = arr
  //     .filter(el => el.category === category)
  //     .map(el => el.amount)
  //     .reduce(function(result, num) {
  //       return result + num;
  //     }, 0);

  //   switch (category) {
  //     case 'regular':
  //       return console.log(categoryReducer);
  //     case 'food':
  //       return console.log(categoryReducer);
  //     case 'automobile':
  //       return console.log(categoryReducer);
  //     case 'self care':
  //       return console.log(categoryReducer);
  //     case 'children':
  //       return console.log(categoryReducer);
  //     case 'home':
  //       return console.log(categoryReducer);
  //     case 'education':
  //       return console.log(categoryReducer);
  //     case 'enterteinment':
  //       return console.log(categoryReducer);
  //     case 'other':
  //       return console.log(categoryReducer);
  //   }
  // }

  render() {
    // this.state.costsFilter.map(el =>
    //   this.test(el.category, this.state.costsFilter),
    // );

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
              <StatsTable items={this.state.costsFilter} />
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
  // transactions: state.finance.data,
});

export default connect(
  mapStateToProps,
  null,
)(Stats);
