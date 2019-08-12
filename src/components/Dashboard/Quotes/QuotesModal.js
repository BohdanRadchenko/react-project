import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../../../assets/quotes.json';
import styles from './QuotesModal.module.css';

const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

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
    this.disableScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
    this.enableScroll();
  }

  handleOpenDescription = () => {
    this.setState(prevState => ({
      isDescriptionOpen: !prevState.isDescriptionOpen,
    }));
  };

  //---------------------------------------

  preventDefault = e => {
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  };

  preventDefaultForScrollKeys = e => {
    if (keys[e.keyCode]) {
      this.preventDefault(e);
    }
    return false;
  };

  disableScroll = () => {
    if (window.addEventListener)
      // older FF
      window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    document.addEventListener('wheel', this.preventDefault, { passive: false }); // Disable scrolling in Chrome
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove = this.preventDefault; // mobile
    document.onkeydown = this.preventDefaultForScrollKeys;
  };

  enableScroll = () => {
    if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    document.removeEventListener('wheel', this.preventDefault, {
      passive: false,
    }); // Enable scrolling in Chrome
    window.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  };

  //----------------------------------------
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
    const { quotes } = this.state;
    const selectedQuote =
      quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
    return (
      <button
        className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        onKeyPress={this.handleKeyPress}
        type="button"
      >
        <div className={styles.modal}>
          <p className={styles.modalId}>
            Usefull advice &#8470;{selectedQuote.id}
          </p>
          <h2 className={styles.modalTitle}>{selectedQuote.title}</h2>
        </div>
      </button>
    );
  }
}
