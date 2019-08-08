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
      case 'Main Expenses':
        return '#ECB22A';
      case 'Food':
        return '#E28B20';
      case 'Car':
        return '#D25925';
      case 'Self Care':
        return '#67B7D0';
      case 'Child Care':
        return '#5593D7';
      case 'House':
        return '#3E6BA8';
      case 'Education':
        return '#9CC254';
      case 'Enterteinment':
        return '#73AD57';
      case 'Others':
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
    const reducedCategory = value =>
      filteredCost
        .filter(el => el.category === value)
        .map(el => el.amount)
        .reduce(function(result, num) {
          return result + num;
        }, 0);
    const colorAuto = value => this.colorSwitch(value);
    const labels = value => {
      if (filteredCost.map(el => el.category === value)) {
        return value;
      } else {
        ('');
      }
    };

    this.setState({
      items: [...this.props.transactions],
      balance: statisticsCount(transactions).balance,
      deposits: statisticsCount(transactions).deposits,
      withdrow: statisticsCount(transactions).withdrow,
      costsFilter: [...filteredCost],
      chart: {
        labels: [
          labels('Main Expenses'),
          labels('Food'),
          labels('Car'),
          labels('Self Care'),
          labels('Child Care'),
          labels('House'),
          labels('Education'),
          labels('Enterteinment'),
          labels('Others'),
        ],

        datasets: [
          {
            data: [
              reducedCategory('Main Expenses'),
              reducedCategory('Food'),
              reducedCategory('Car'),
              reducedCategory('Self Care'),
              reducedCategory('Child Care'),
              reducedCategory('House'),
              reducedCategory('Education'),
              reducedCategory('Enterteinment'),
              reducedCategory('Others'),
            ],
            backgroundColor: [
              colorAuto('Main Expenses'),
              colorAuto('Food'),
              colorAuto('Car'),
              colorAuto('Self Care'),
              colorAuto('Child Care'),
              colorAuto('House'),
              colorAuto('Education'),
              colorAuto('Enterteinment'),
              colorAuto('Others'),
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
                  label={'Month'}
                />
              </div>
              <div className={styles.innerSelectYear}>
                <StatsSelect
                  options={OptionsYears}
                  handleSelect={this.getSelectYears}
                  label={'Year'}
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
  // transactions: db,
  transactions: state.finance.data,
});

export default connect(
  mapStateToProps,
  null,
)(Stats);
