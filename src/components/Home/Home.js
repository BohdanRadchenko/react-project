/*eslint-disable*/
import React, { Component } from 'react';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import AddButton from './AddButton/AddButton';
import Modal from '../Modal/Modal';

class Home extends Component {
  state = {
    isOpenModal: false,
  };

  handleOpen = () => {
    this.setState({ isOpenModal: true });
  };

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { isOpenModal } = this.state;
    return (
      <div>
        <TransactionsTable />
        <AddButton onOpen={this.handleOpen} />
        {isOpenModal && <Modal onClose={this.handleClose} />}
      </div>
    );
  }
}

// export default Home;

// const Home = () => (
//   <div>
//     <p>Homew</p>
//   </div>
// );

export default Home;
