/*eslint-disable*/
import React from 'react';
import axios from 'axios';
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
    axios
      .get(API)
      .then(response =>
        this.setState({ currencies: response.data, wait: false }),
      );
  };

  render() {
    const { currencies, wait } = this.state;
    const curr = currencies.filter(el => el.ccy !== 'BTC');
    return (
      <div className={style.form}>
        <table className={style.history}>
          <thead>
            <tr className={style.historyTr}>
              <th>Валюта</th> <th>Покупка</th> <th>Продажа</th>
            </tr>
          </thead>
          <tbody className={style.tBody}>
            {wait && <Loaders />}
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
