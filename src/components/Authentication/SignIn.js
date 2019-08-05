import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="email"
          name=""
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name=""
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Войти</button>
      </form>
    );
  }
}

export default SignIn;
