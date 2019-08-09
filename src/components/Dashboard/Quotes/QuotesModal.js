/* eslint-disable*/

import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../../../assets/quotes.json';
import styles from './QuotesModal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  state = {
    quotes: Quotes,
    isDescriptionOpen: false,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleOpenDescription = () => {
    this.setState(prevState => ({
      isDescriptionOpen: !prevState.isDescriptionOpen,
    }));
  };

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

  render() {
    const { quotes, isDescriptionOpen } = this.state;
    const selectedQuote =
      quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
    return (
      <div
        className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.modal}>
          <p className={styles.modalId}>
            Usefull advice &#8470;{selectedQuote.id}
          </p>
          <h2 className={styles.modalTitle}>{selectedQuote.title}</h2>
          <button type="button" onClick={this.handleOpenDescription}>
            More...
          </button>
          {isDescriptionOpen && (
            <p className={styles.modalText}>{selectedQuote.body}</p>
          )}
        </div>
      </div>
    );
  }
}
