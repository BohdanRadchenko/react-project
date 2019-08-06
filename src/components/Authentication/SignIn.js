/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn } from '../../redux/session/sessionOperations';
import {
  getError,
  isAthentificated,
} from '../../redux/session/sessionSelectors';

class SignIn extends Component {
  static defaultProps = {
    errorMessage: '',
  };

  static propTypes = {
    onSignIn: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
  };

  state = {
    email: '',
    password: '',
    isAthentificated: false,
  };

  componentDidUpdate() {
    const { isAthentificated } = this.props;
    if (isAthentificated) {
      this.props.history.push('/dashboard');
    }
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.onSignIn({ ...this.state });
  };

  render() {
    const { email, password } = this.state;
    const { errorMessage } = this.props;
    return (
      <form
        onSubmit={this.handleFormSubmit}
        style={{
          display: 'flex',
          margin: 'auto',
          width: 500,
          flexDirection: 'column',
        }}
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Войти</button>
        <p>{errorMessage}</p>
      </form>
    );
  }
}

const mSTP = state => ({
  errorMessage: getError(state),
  isAthentificated: isAthentificated(state),
});

const mDTP = {
  onSignIn: signIn,
};

export default connect(
  mSTP,
  mDTP,
)(SignIn);
