/*eslint-disable*/
import React, { Component, createRef } from 'react';
import { toast } from 'react-toastify';
import AddTransaction from './AddTransaction/AddTransaction';
import { transactions } from '../../constans/modalConstants';
import {
  countBalanceAfter,
  countTypeBalanceAfter,
} from '../../helpers/countBalanceAfter';
import styles from './Modal.module.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default class Modal extends Component {
  state = {
    isCost: true,
    type: transactions.COST,
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

  handleAmountInput = value => {
    if (!value) {
      return;
    } else if (Number.isNaN(value)) {
      return;
    }
    this.setState({ amount: String(value) });
  };

  handleTextareaInput = ({ target: { value } }) => {
    if (value.length > 40) {
      // lodash.throttle(toast.warn('Too many symbols!'), 2000);
      return;
    }
    this.setState({ comments: value });
  };

  handleSelectChange = e => this.setState({ category: e });

  handleDateChange = date => {
    this.setState({ date });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { type, category, amount, comments, date } = this.state;
    if (Number(amount) <= 0) {
      toast.error('Invalid input!');
      return;
    }

    if (type === transactions.COST && !category) {
      toast.error('Enter category!');
      return;
    }

    const transactionToAdd = {
      type: category ? '-' : '+',
      amount: parseFloat(Number(amount).toFixed(2)),
      category: category.value,
      date: new Date(String(date)).getTime(),
      comments,
    };
    const balanceAfter = countBalanceAfter(
      this.props.transactions,
      transactionToAdd,
    );
    const typeBalanceAfter = countTypeBalanceAfter(balanceAfter);

    transactionToAdd.balanceAfter = balanceAfter;
    transactionToAdd.typeBalanceAfter = typeBalanceAfter;

    console.log(transactionToAdd);
    this.props.postTransaction(transactionToAdd, this.props.token);
    this.reset();
  };

  reset = () =>
    this.setState({
      isCost: true,
      type: transactions.COST,
      amount: '',
      comments: '',
      date: new Date(),
      category: null,
    });

  render() {
    const { isCost, type, comments, amount, date, category } = this.state;
    return (
      <div
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        className={styles.backdrop}
      >
        <AddTransaction
          isCost={isCost}
          amount={Number(amount)}
          category={category}
          type={type}
          date={date}
          comments={comments}
          handleRadioChange={this.handleRadioChange}
          handleAmountInput={this.handleAmountInput}
          handleTextareaInput={this.handleTextareaInput}
          handleSelectChange={this.handleSelectChange}
          handleDateChange={this.handleDateChange}
          handleSubmit={this.handleSubmit}
          handleClose={this.props.onClose}
        />
      </div>
    );
  }
}
