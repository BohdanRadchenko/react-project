import React, { Component, createRef } from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import Select from 'react-select';
import NumericInput from 'react-numeric-input';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import { categories, transactions } from '../../../constans/modalConstants';
import styles from '../Modal.module.css';

const inputStyles = { style: false };

export default class AddTransaction extends Component {
  state = {};

  btnRef = createRef();

  static propTypes = {
    amount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    isCost: PropTypes.bool.isRequired,
    comments: PropTypes.string.isRequired,
    category: PropTypes.shapeOf({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.shape(PropTypes.any).isRequired,
    handleRadioChange: PropTypes.func.isRequired,
    handleAmountInput: PropTypes.func.isRequired,
    handleSelectChange: PropTypes.func.isRequired,
    handleDateChange: PropTypes.func.isRequired,
    handleTextareaInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  render() {
    const {
      amount,
      type,
      isCost,
      comments,
      category,
      date,
      handleRadioChange,
      handleAmountInput,
      handleSelectChange,
      handleDateChange,
      handleTextareaInput,
      handleSubmit,
      handleClose,
    } = this.props;

    return (
      <div className={styles.modal}>
        <div className={styles.titleDiv}>
          <Media
            query="(max-width: 766px)"
            render={() => (
              <button
                type="button"
                className={styles.backBtn}
                refs={this.btnRef}
                onClick={handleClose}
              />
            )}
          />
          <h2 className={styles.title}>Add a transaction</h2>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.radiosDiv}>
            <div className={styles.innerRadioDiv}>
              <input
                type="radio"
                id="incomeID"
                name="transaction"
                checked={type === transactions.INCOME}
                onChange={handleRadioChange}
                className={styles.radio}
              />
              <label htmlFor="incomeID">Income</label>
            </div>
            |
            <div className={styles.innerRadioDiv}>
              <input
                className={`${styles.radio} ${styles.radioCost}`}
                type="radio"
                id="cost"
                name="transaction"
                checked={type === transactions.COST}
                onChange={handleRadioChange}
              />
              <label htmlFor="cost">Cost</label>
            </div>
          </div>
          {isCost && (
            <Select
              value={category}
              className={styles.select}
              options={categories}
              onChange={handleSelectChange}
              required
            />
          )}
          <div className={styles.inputsDiv}>
            <NumericInput
              // style={false}
              {...inputStyles}
              className="form-control"
              min={0}
              precision={2}
              value={amount}
              onChange={handleAmountInput}
              require="true"
              strict
              maxLength={13}
            />
            <DatePicker
              value={date}
              onChange={handleDateChange}
              maxDate={new Date()}
              format="dd/MM/yyyy"
              locale="en"
              className={`${styles.input} ${styles.dateInput}`}
              required
            />
          </div>
          <h2 className={styles.comment}>Comment</h2>
          <textarea
            cols="20"
            rows="2"
            value={comments}
            placeholder="Add a comment..."
            onChange={handleTextareaInput}
            className={styles.textarea}
          />
          <div className={styles.buttonDiv}>
            <button className={styles.addButton} type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
