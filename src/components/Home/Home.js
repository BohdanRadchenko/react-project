/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import AddButton from './AddButton/AddButton';
import Modal from '../Modal/ModalContainer';
// import db from '../../db.json';
import styles from './Home.module.css';
import Welcome from './Welcome/Welcome';
import ModalQuotes from '../Quotes/QuotesModal';
class Home extends Component {
  state = {
    isOpenModal: false,
    items: [],
  };

  // componentDidMount() {
  //   const { finance } = this.props;
  //   this.setState({
  //     items: [...finance],
  //   });

  // }

  handleOpen = () => {
    this.setState({ isOpenModal: true });
  };

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { finance } = this.props;
    // console.log(finance);
    // console.log('render');

    const { isOpenModal } = this.state;
    return (
      <div className={styles.container_home}>
        <ModalQuotes />
        <div className={styles.container_table}>
          {finance.length === 0 && <Welcome />}
          {finance.length !== 0 && <TransactionsTable items={finance} />}
          {/* <TransactionsTable items={finance} /> */}
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
