import React, { Component } from 'react';
import Media from 'react-media';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import AddButton from './AddButton/AddButton';
import Modal from '../Modal/ModalContainer';
import styles from './Home.module.css';
import Welcome from './Welcome/Welcome';
import SlideTransition from './Slide.module.css';
import { getTransactions } from '../../redux/finance/financeSelectors';

class Home extends Component {
  state = {
    isOpenModal: false,
  };

  static propTypes = {
    finance: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
        category: PropTypes.string,
        comments: PropTypes.string,
        amount: PropTypes.number.isRequired,
        balanceAfter: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  };

  handleOpen = () => {
    this.setState({ isOpenModal: true });
  };

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { finance } = this.props;
    const { isOpenModal } = this.state;

    const arr = [...finance].reverse();

    return (
      <div className={styles.container_home}>
        <div className={styles.container_table}>
          {finance.length === 0 && <Welcome />}
          {finance.length !== 0 && <TransactionsTable items={arr} />}
          <AddButton onOpen={this.handleOpen} />
        </div>
        <Media
          query="(max-width: 766px)"
          render={() => (
            <CSSTransition
              in={isOpenModal}
              timeout={200}
              classNames={SlideTransition}
              unmountOnExit
            >
              <Modal onClose={this.handleClose} />
            </CSSTransition>
          )}
        />
        <Media
          query="(min-width: 767px)"
          render={() => isOpenModal && <Modal onClose={this.handleClose} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  finance: getTransactions(state),
});

export default connect(
  mapStateToProps,
  null,
)(Home);
