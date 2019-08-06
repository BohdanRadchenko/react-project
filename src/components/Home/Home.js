/*eslint-disable*/
import React, { Component } from 'react';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import AddButton from './AddButton/AddButton';

class Home extends Component {
  state = {
    isOpenModal: false,
  };

  handleOpen = () => {
    this.setState({ isOpenModal: true });
    // console.log('open');
  };

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { isOpenModal } = this.state;
    console.log(isOpenModal);
    return (
      <div>
        <TransactionsTable />
        <AddButton onOpenModal={this.handleOpen} />
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
