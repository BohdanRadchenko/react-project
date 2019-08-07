/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import DatePicker from 'react-date-picker';
import { categories, transactions } from '../../../constans/modalConstants';
import styles from '../Modal.module.css';

const AddTransaction = ({
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
}) => (
  <div className={styles.modal}>
    <form onSubmit={handleSubmit} className={styles.modal}>
      <h2>Add a transaction</h2>
      <div>
        <input
          type="radio"
          id="income"
          name="transaction"
          checked={type === transactions.INCOME}
          onChange={handleRadioChange}
        />
        <label htmlFor="income">Income</label>
        <input
          type="radio"
          id="cost"
          name="transaction"
          checked={type === transactions.COST}
          onChange={handleRadioChange}
        />
        <label htmlFor="cost">Cost</label>
      </div>
      {isCost && <Select options={categories} onChange={handleSelectChange} />}
      <input
        name="amount"
        type="number"
        value={Number(amount).toFixed(2)}
        onChange={handleTextChange}
        required
      />
      <DatePicker
        value={date}
        onChange={handleDateChange}
        maxDate={new Date()}
        format="dd/MM/yyyy"
        locale="en"
        required
      />
      <textarea
        name="comments"
        cols="20"
        rows="2"
        value={comments}
        placeholder="Add a comment..."
        onChange={handleTextChange}
      />
      <button type="submit">Add</button>
    </form>
  </div>
);

AddTransaction.propTypes = {
  amount: PropTypes.string.isRequired,
};

export default AddTransaction;
