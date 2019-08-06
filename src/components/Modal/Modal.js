/*eslint-disable*/
import React, { Component, createRef } from 'react';
import AddTransaction from './AddTransaction/AddTransaction';
import styles from './Modal.module.css';

export const transactions = {
  INCOME: 'INCOME',
  COST: 'COST',
};

export default class Modal extends Component {
  state = {
    isCost: false,
    type: transactions.INCOME,
    amount: '',
    comment: '',
    date: null,
    category: null,
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

  handleSubmit = e => {
    e.preventDefault();
    const { type, category, amount, comment, date } = this.state;

    if (category) {
      const transactionToAdd = {
        type,
        amount,
        category,
        comment,
        date,
      };
      this.props.addCostTransaction(transactionToAdd);
    } else {
      const transactionToAdd = {
        type,
        amount,
        comment,
        date,
      };
      this.props.addIncomeTransaction(transactionToAdd);
    }
    this.reset();
  };

  reset = () =>
    this.setState({
      isCost: false,
      type: transactions.INCOME,
      amount: '',
      comment: '',
      date: null,
      category: null,
    });

  render() {
    const { isCost, type } = this.state;
    return (
      <div ref={this.backdropRef}>
        <AddTransaction
          isCost={isCost}
          type={type}
          handleRadioChange={this.handleRadioChange}
          handleTextChange={this.handleTextChange}
          handleSelectChange={this.handleSelectChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
