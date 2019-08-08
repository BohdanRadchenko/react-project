/*eslint-disable*/
import React, { Component, createRef } from 'react';
import AddTransaction from './AddTransaction/AddTransaction';
import { transactions } from '../../constans/modalConstants';
import {
  countBalanceAfter,
  countTypeBalanceAfter,
} from '../../helpers/countBalanceAfter';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state = {
    isCost: false,
    type: transactions.INCOME,
    amount: '',
    comments: '',
    date: new Date(),
    category: null,
    error: null,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.props.onClose();
  };

  handleRadioChange = ({ target: { id } }) =>
    this.setState({
      isCost: id === 'income' ? false : true,
      type: id === 'cost' ? transactions.COST : transactions.INCOME,
    });

  handleTextChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  handleSelectChange = e => this.setState({ category: e.value });

  handleDateChange = date => {
    this.setState({ date });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { category, amount, comments, date } = this.state;

    const transactionToAdd = {
      type: category ? '-' : '+',
      amount: Number(amount),
      category,
      date,
      comments,
    };
    const balanceAfter = countBalanceAfter(
      this.props.transactions,
      transactionToAdd,
    );
    const typeBalanceAfter = countTypeBalanceAfter(balanceAfter);

    transactionToAdd.balanceAfter = balanceAfter;
    transactionToAdd.typeBalanceAfter = typeBalanceAfter;

    this.props.postTransaction(transactionToAdd, this.props.token);
    this.reset();
  };

  reset = () =>
    this.setState({
      isCost: false,
      type: transactions.INCOME,
      amount: '',
      comments: '',
      date: new Date(),
      category: null,
    });

  render() {
    const { isCost, type, comments, amount, date } = this.state;
    return (
      <div
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        className={styles.backdrop}
      >
        <AddTransaction
          isCost={isCost}
          amount={amount}
          type={type}
          date={date}
          comments={comments}
          handleRadioChange={this.handleRadioChange}
          handleTextChange={this.handleTextChange}
          handleSelectChange={this.handleSelectChange}
          handleDateChange={this.handleDateChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
