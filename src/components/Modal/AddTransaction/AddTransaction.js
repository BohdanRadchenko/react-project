/*eslint-disable*/
import React, { Component, createRef } from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import Select from 'react-select';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import { categories, transactions } from '../../../constans/modalConstants';
import styles from '../Modal.module.css';

export default class AddTransaction extends Component {
  state = {};

  btnRef = createRef();

  render() {
    const {
      amount,
      type,
      isCost,
      comments,
      date,
      handleRadioChange,
      handleTextChange,
      handleSelectChange,
      handleDateChange,
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
                id="income"
                name="transaction"
                checked={type === transactions.INCOME}
                onChange={handleRadioChange}
                className={styles.radio}
              />
              <label htmlFor="income">Income</label>
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
              className={styles.select}
              options={categories}
              onChange={handleSelectChange}
              required
            />
          )}
          <div className={styles.inputsDiv}>
            <input
              name="amount"
              type="number"
              value={Number(amount).toFixed(2)}
              // step={0.01}
              min={0}
              onChange={handleTextChange}
              className={`${styles.input} ${styles.amountInput}`}
              required
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
            name="comments"
            cols="20"
            rows="2"
            value={comments}
            placeholder="Add a comment..."
            onChange={handleTextChange}
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

AddTransaction.propTypes = {
  amount: PropTypes.string.isRequired,
};
