/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import AddButton from './AddButton/AddButton';
import Modal from '../Modal/Modal';
import db from '../../db.json';
import styles from './Home.module.css';

class Home extends Component {
  state = {
    isOpenModal: false,
    items: [],
  };

  componentDidMount() {
    const { transactions } = this.props;
    this.setState({
      items: [...transactions],
    });
  }

  handleOpen = () => {
    this.setState({ isOpenModal: true });
  };

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { isOpenModal, items } = this.state;
    return (
      <div className={styles.container_home}>
        <div className={styles.container_table}>
          <TransactionsTable items={items} />
          <AddButton onOpen={this.handleOpen} />
        </div>
        {isOpenModal && <Modal onClose={this.handleClose} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: db,
});

export default connect(
  mapStateToProps,
  null,
)(Home);
