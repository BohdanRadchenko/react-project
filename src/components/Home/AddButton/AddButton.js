/*eslint-disable*/
import React from 'react';
import styles from './AddButton.module.css';

const AddButton = ({ onOpen }) => (
  <button onClick={onOpen} type="button" className={styles.button}>
    +
  </button>
);

export default AddButton;
