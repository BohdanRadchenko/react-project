import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import { signUp } from '../../redux/session/sessionOperations';
import { getError } from '../../redux/session/sessionSelectors';
import './test.css';
import PasswordStrengthMeter from '../PasswordStrengthMeter/PasswordStrengthMeter';

class SignUp extends Component {
  static defaultProps = {
    errorMessage: '',
  };

  static propTypes = {
    onSignUp: PropTypes.func.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    errorMessage: PropTypes.string,
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
      if (data.payload.error) return;
      this.props.history.push('/signin');
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
    const { errorMessage } = this.props;
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
        <p>{errorMessage}</p>
      </form>
    );
  }
}

const mSTP = state => ({
  errorMessage: getError(state),
});

const mDTP = {
  onSignUp: signUp,
};

export default connect(
  mSTP,
  mDTP,
)(SignUp);
