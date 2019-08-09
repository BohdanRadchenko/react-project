import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddButton.module.css';

const AddButton = ({ onOpen }) => (
  <button onClick={onOpen} type="button" className={styles.button}>
    +
  </button>
);

AddButton.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default AddButton;
