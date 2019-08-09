/*eslint-disable*/
import React, { Component } from 'react';
import Media from 'react-media';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import AddButton from './AddButton/AddButton';
import Modal from '../Modal/ModalContainer';
import styles from './Home.module.css';
import Welcome from './Welcome/Welcome';
import SlideTransition from './Slide.module.css';

class Home extends Component {
  state = {
    isOpenModal: false,
    items: [],
    firstOpen: true,
  };

  handleOpen = () => {
    this.setState({ isOpenModal: true });
  };

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  handleTypeClick = () => {
    console.log('click');
  };

  render() {
    const { finance } = this.props;
    const arr = [...finance].reverse();

    // const compare=( a, b )=> {
    //   if ( a.last_nom < b.last_nom ){
    //     return -1;
    //   }
    //   if ( a.last_nom > b.last_nom ){
    //     return 1;
    //   }
    //   return 0;
    // }

    // objs.sort( compare );

    const newArr = [...arr];

    function dynamicSort(property) {
      let sortOrder = 1;
      if (property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function(a, b) {
        let result =
          a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        return result * sortOrder;
      };
    }

    const R = newArr.sort(dynamicSort('type'));

    const { isOpenModal } = this.state;

    return (
      <div className={styles.container_home}>
        <div className={styles.container_table}>
          {finance.length === 0 && <Welcome />}
          {finance.length !== 0 && (
            <TransactionsTable items={R} onTypeClick={this.handleTypeClick} />
          )}
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
        {/* {isOpenModal && <Modal onClose={this.handleClose} />} */}
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
