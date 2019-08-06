import { transactionTypes } from './ModalActions';

const modalReducer = (state = [], { type, payload }) => {
  switch (type) {
    case transactionTypes.COST:
    case transactionTypes.INCOME:
      return [...state, payload];
    default:
      return state;
  }
};

export default modalReducer;
