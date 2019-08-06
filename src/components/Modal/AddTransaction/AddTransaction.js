/*eslint-disable*/
import React from 'react';
import Select from 'react-select';
import DatePicker from 'react-date-picker';
import categories from '../../../constans/modalConstants';
import { transactions } from '../Modal';

const AddTransaction = ({
  amount,
  type,
  isCost,
  comment,
  date,
  handleRadioChange,
  handleTextChange,
  handleSelectChange,
  handleDateChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
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
      type="text"
      value={amount}
      onChange={handleTextChange}
      required
    />
    <DatePicker
      value={date}
      onChange={handleDateChange}
      maxDate={new Date()}
      format="MM/dd/yyyy"
      locale="it"
      returnValue="range"
    />
    <textarea
      name="comment"
      cols="20"
      rows="2"
      value={comment}
      placeholder="Add a comment..."
      onChange={handleTextChange}
    />
    <button type="submit">Add</button>
  </form>
);

export default AddTransaction;
