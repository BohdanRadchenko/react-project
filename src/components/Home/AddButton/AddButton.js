/*eslint-disable*/
import React from 'react';
import styles from './AddButton.module.css';

const AddButton = ({ onOpenModal }) => (
  <button onClick={onOpenModal} type="button" className={styles.button}>
    +
  </button>
);

export default AddButton;
