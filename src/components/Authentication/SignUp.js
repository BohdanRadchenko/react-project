import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import { signUp } from '../../redux/session/sessionOperations';
import './test.css';
import PasswordStrengthMeter from '../PasswordStrengthMeter/PasswordStrengthMeter';

class SignUp extends Component {
  static propTypes = {
    onSignUp: PropTypes.func.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
  };

  state = {
    email: '',
    isEmailValid: true,
    password: '',
    // isPaswordValid: true,
    passwordConfirm: '',
    // isPasswordEqual: true,
    name: '',
  };

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleEnterSubmit);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleEnterSubmit);
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = e => {
    if (e) e.preventDefault();

    const { email, name, password } = this.state;

    this.props.onSignUp({ email, name, password }).then(data => {
      if (!data) return;
      const { success } = data.payload.response;
      if (success) this.props.history.push('/signin');
    });
  };

  handleEnterSubmit = ({ code }) =>
    code === 'Enter' || code === 'NumpadEnter' ? this.handleSubmit() : null;

  handleValidation = ({ target: { name } }) => {
    if (name === 'email') {
      if (!this.state.email.includes('@'))
        return this.setState({ isEmailValid: false });

      return this.setState({ isEmailValid: true });
    }

    return null;
  };

  render() {
    const { name, password, email, passwordConfirm, isEmailValid } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 10,
          width: 500,
          margin: 'auto',
        }}
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.handleValidation}
        />
        {!isEmailValid && <p>Email is not valid</p>}
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          onBlur={this.handleValidation}
        />
        <PasswordStrengthMeter password={password} />
        <input
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={this.handleChange}
          onBlur={this.handleValidation}
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          onBlur={this.handleValidation}
        />
        <button type="submit">Регистация</button>
      </form>
    );
  }
}

const mDTP = {
  onSignUp: signUp,
};

export default connect(
  null,
  mDTP,
)(SignUp);
