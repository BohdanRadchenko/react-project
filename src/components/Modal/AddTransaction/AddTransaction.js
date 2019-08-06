/*eslint-disable*/
import React from 'react';
import Select from 'react-select';
// import Datetime from 'react-datetime';
import categories from '../../../constans/modalConstants';
import { transactions } from '../Modal';

const AddTransaction = ({
  value,
  type,
  isCost,
  handleRadioChange,
  handleTextChange,
  handleSelectChange,
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
      value={value}
      onChange={handleTextChange}
      required
    />
    {/* <Datetime /> */}
    <textarea
      name="comment"
      cols="20"
      rows="2"
      placeholder="Add a comment..."
      onChange={handleTextChange}
    />
    <button type="submit">Add</button>
  </form>
);

export default AddTransaction;
