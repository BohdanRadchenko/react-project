import React from 'react';
// import axios from 'axios';
import style from './Currencies.module.css';
import Loaders from './loaders';

const API = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

class Currencies extends React.Component {
  state = {
    currencies: [],
    wait: false,
  };

  componentDidMount() {
    this.getCurrencies();
  }

  getCurrencies = () => {
    this.setState({
      wait: true,
    });
    fetch(API)
      .then(response => response.json())
      .then(data =>
        this.setState({
          currencies: data,
        }),
      )
      .finally(
        this.setState({
          wait: false,
        }),
      );
  };

  render() {
    const { currencies, wait } = this.state;
    const curr = currencies.filter(el => el.ccy !== 'BTC');
    return (
      <div className={style.form}>
        {wait && <Loaders />}
        <table className={style.history}>
          <thead>
            <tr className={style.historyTr}>
              <th>Currency</th>
              <th>Buy</th>
              <th>Sale</th>
            </tr>
          </thead>
          <tbody className={style.tBody}>
            {!wait &&
              curr.map(el => {
                return (
                  <tr key={el.ccy} className={style.currTr}>
                    <th>{el.ccy}</th>
                    <th>{Number(el.buy).toFixed(2)}</th>
                    <th>{Number(el.sale).toFixed(2)}</th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Currencies;
