/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import UserLog from './UserLog';
// import { signOut } from '../../redux/session/sessionOperations';

class Header extends Component {
  state = {};

  // componentDidMount() {
  //   this.props.(authentificated);
  // }

  // state = { isLogOut: false };

  // handleLogOut = () => {
  //   signOut().then(({ message }) => {
  //     if (message === 'User successfully logout') {
  //       localStorage.clear();
  //       this.props.logout();
  //       this.props.history.push('/signup');
  //     }
  //   });
  // };

  render() {
    return <UserLog onLogOut={this.handleLogOut} />;
  }
}

// const mapStateToProps = state => ({});

export default Header;
