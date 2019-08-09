/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import AddButton from './AddButton/AddButton';
import Modal from '../Modal/ModalContainer';
import styles from './Home.module.css';
import Welcome from './Welcome/Welcome';

class Home extends Component {
  state = {
    isOpenModal: false,
  };

  // static propTypes = {
  //   finance: PropTypes.array.isRequired,
  // };

  // static propTypes = {
  //   finance: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       items: PropTypes.object.isRequired,
  //     }).isRequired,
  //   ).isRequired,
  // };

  handleOpen = () => {
    this.setState({ isOpenModal: true });
  };

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { finance } = this.props;
    const arr = [...finance].reverse();

    const { isOpenModal } = this.state;

    return (
      <div className={styles.container_home}>
        <div className={styles.container_table}>
          {finance.length === 0 && <Welcome />}
          {finance.length !== 0 && <TransactionsTable items={arr} />}
          <AddButton onOpen={this.handleOpen} />
        </div>
        {isOpenModal && <Modal onClose={this.handleClose} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  finance: state.finance.data,
});

export default connect(
  mapStateToProps,
  null,
)(Home);
