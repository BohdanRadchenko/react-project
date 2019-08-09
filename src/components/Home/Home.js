/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import AddButton from './AddButton/AddButton';
import Modal from '../Modal/ModalContainer';
import styles from './Home.module.css';
import Welcome from './Welcome/Welcome';

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
    const { finance } = this.props;
    const arr = [...finance].reverse();

    console.log(arr.sort());

    // var str = '1000000';
    // var out = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, ' ');
    // console.log(out);

    // const arrSort = arr

    // arrSort.sort(a.date ,b.date){
    //   return a - b
    // }

    // const separationNumber = n => {
    //   const result = n.toLocaleString('usd');

    //   return result;
    // };

    // console.log(separationNumber(100000.5));

    var nubmer = 1205345,
      format = String(nubmer).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

    console.log(format);

    //     var myarray=[25, 8, 7, 41]
    //     myarray.sort(function(a,b){
    //       return a — b
    //     }) //Массив будет [7, 8, 25, 41]

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
