import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './SignUp.module.css';
import { getError } from '../../redux/session/sessionSelectors';
import PasswordStrengthMeter from '../PasswordStrengthMeter/PasswordStrengthMeter';

import walletIcon from './img/walletIcon.png';

class SignUp extends Component {
  static defaultProps = {
    errorMessage: '',
  };

  static propTypes = {
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    values: PropTypes.objectOf(PropTypes.string).isRequired,
    errors: PropTypes.objectOf(PropTypes.string).isRequired,
    touched: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleEnterSubmit);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleEnterSubmit);
  }

  handleEnterSubmit = ({ code }) =>
    code === 'Enter' || code === 'NumpadEnter'
      ? this.props.handleSubmit()
      : null;

  render() {
    const { errorMessage } = this.props;
    const {
      values,
      handleBlur,
      handleChange,
      handleSubmit,
      errors,
      touched,
    } = this.props;
    return (
      <div className={css.signUpWrapp}>
        <div className={css.walletWrapp}>
          <img src={walletIcon} alt="wallet" className={css.icon} />
          <h1 className={css.walletTitle}>Wallet</h1>
        </div>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={`${css.input} ${css.email} ${css.inputIcon}`}
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="E-mail*"
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <input
            className={`${css.input} ${css.password} ${css.inputIcon}`}
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password*"
          />
          <PasswordStrengthMeter password={values.password} />
          {errors.password && touched.password && <div>{errors.password}</div>}
          <input
            className={`${css.input} ${css.password} ${css.inputIcon}`}
            type="password"
            name="passwordConfirm"
            value={values.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Confirm password*"
          />
          {errors.passwordConfirm && touched.passwordConfirm && (
            <div>{errors.passwordConfirm}</div>
          )}
          <input
            className={`${css.input} ${css.name} ${css.inputIcon}`}
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Name*"
          />
          {errors.name && touched.name && <div>{errors.name}</div>}
          <button type="submit" className={css.button}>
            Sign up
          </button>
          <p>{errorMessage}</p>
        </form>
      </div>
    );
  }
}

const mSTP = state => ({
  errorMessage: getError(state),
});

export default connect(mSTP)(SignUp);
