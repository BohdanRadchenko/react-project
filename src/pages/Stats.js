/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatsDiagram from '../components/Stats/StatsDiagram/StatsDiagram';
import StatsTable from '../components/Stats/StatsTable/StatsTable';
import StatsSelect from '../components/Stats/StatsSelect/StatsSelect';
import OptionsMonth from '../components/Stats/Options/OptionsMonth';
import OptionsYears from '../components/Stats/Options/OptionsYear';
import statisticsCount from '../helpers/statisticsCount';
import filterItems from '../helpers/filterItems';
import colorSwitcher from '../helpers/colorSwitcher';
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

  componentDidUpdate(prevProps, prevState) {
    const { items, search } = this.state;
    if (items.length !== prevState.length) {
      this.test();
    }
  }

  test = () => {
    const statsTableLines = document.getElementsByClassName('rt-tr');
    for (let item of statsTableLines) {
      item.insertAdjacentHTML(
        'afterbegin',
        `<div style="background-color: ${colorSwitcher(
          item.children[0].textContent,
        )}" class="two"></div>`,
      );
    }
  };

  getFilteredItems = () => {
    const { search, items } = this.state;

    return filterItems(items, search.year, search.month);
  };

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
    const { items } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.innerTitle}>
          <h2 className={styles.title}>Statistics</h2>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.innerDiagramContainer}>
            <div className={styles.innerDiagram}>
              <StatsDiagram
                items={
                  this.getFilteredItems() !== undefined
                    ? this.getFilteredItems()
                    : this.state.items
                }
              />
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
                  options={OptionsYears(items)}
                  handleSelect={this.getSelectYears}
                  label={'Year'}
                />
              </div>
            </div>
            <div className={styles.innerTable}>
              <StatsTable
                items={
                  this.getFilteredItems() !== undefined
                    ? this.getFilteredItems()
                    : this.state.items
                }
              />
            </div>
            {/* <div className={styles.total}>
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.finance.data,
});

export default connect(
  mapStateToProps,
  null,
)(Stats);
