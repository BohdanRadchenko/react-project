import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from '../SignUp.module.css';
import phone from '../img/iPhone 62x.png';
import PasswordStrengthMeter from '../../PasswordStrengthMeter/PasswordStrengthMeter';
import casualPropTypes from '../propTypes';
import walletIcon from '../img/walletIcon.png';
import SocialsAuth from '../SocialsAuth';

class SignUp extends Component {
  static propTypes = {
    facebookAuth: PropTypes.func.isRequired,
    googleAuth: PropTypes.func.isRequired,
    ...casualPropTypes,
  };

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleEnterSubmit);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleEnterSubmit);
  }

  handleAuthFacebook = response => this.props.facebookAuth(response);

  handleAuthGoogle = response => this.props.googleAuth(response);

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
        <div className={css.imgWrapp}>
          <img
            src={phone}
            alt="phone"
            className={css.phoneBackground}
            width={291}
            height={591}
          />
          <h2 className={css.financeDesctopTitle}>Finance App</h2>
        </div>
        <div className={css.formWrapp}>
          <div className={css.walletWrapp}>
            <img src={walletIcon} alt="wallet" className={css.icon} />
            <h1 className={css.walletTitle}>Wallet</h1>
          </div>
          <form className={css.form} onSubmit={handleSubmit}>
            <input
              className={`${css.input} ${css.email} ${
                css.inputIcon
              } ${errors.email && css.errorInput}`}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="E-mail*"
            />
            {errors.email && touched.email && (
              <div>
                <p className={css.errorText}>{errors.email}</p>
              </div>
            )}
            <input
              className={`${css.input} ${css.password} ${
                css.inputIcon
              } ${errors.password && css.errorInput}`}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password*"
              autoComplete="off"
            />
            <PasswordStrengthMeter password={values.password} />
            {errors.password && touched.password && (
              <div>
                <p className={css.errorText}>{errors.password}</p>
              </div>
            )}
            <input
              className={`${css.input} ${css.password} ${
                css.inputIcon
              } ${errors.passwordConfirm && css.errorInput}`}
              type="password"
              name="passwordConfirm"
              value={values.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm password*"
              autoComplete="off"
            />
            {errors.passwordConfirm && touched.passwordConfirm && (
              <div>
                <p className={css.errorText}>{errors.passwordConfirm}</p>
              </div>
            )}
            <input
              className={`${css.input} ${css.name} ${
                css.inputIcon
              } ${errors.name && css.errorInput}`}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name*"
            />
            {errors.name && touched.name && (
              <div>
                <p className={css.errorText}>{errors.name}</p>
              </div>
            )}
            <p className={css.errorText}>{errorMessage}</p>

            <SocialsAuth
              handleAuthFacebook={this.handleAuthFacebook}
              handleAuthGoogle={this.handleAuthGoogle}
            />

            <button type="submit" className={css.button}>
              Sign up
            </button>
          </form>
          <Link to="/signin" className={css.link}>
            <p className={css.linkText}>Sign in</p>
          </Link>
        </div>
        <h3 className={css.financeTitle}>Finance App</h3>
      </div>
    );
  }
}

export default SignUp;
