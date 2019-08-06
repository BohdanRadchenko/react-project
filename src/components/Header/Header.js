/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import UserLog from './UserLog';

class Header extends Component {
  state = { isLogOut: false };

  handleLogOut = () => {
    if (this.state.isLogOut === true) {
      localStorage.clear();
      this.props.history.push('/SignUp');
    }
  };

  render() {
    return <UserLog />;
  }
}

export default Header;
