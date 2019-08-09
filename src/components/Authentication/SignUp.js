import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getError } from '../../redux/session/sessionSelectors';
import style from './Authentication.module.css';
import PasswordStrengthMeter from '../PasswordStrengthMeter/PasswordStrengthMeter';

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
      <div className={style.modal}>
        <div>
          <img
            alt="Financ App"
            className={style.backgroundIMG}
            // eslint-disable-next-line global-require
            src={require('./img/sq.png')}
          />
          <div className={style.iphoneIMG} />
          <div className={style.test}>
            <p className={style.financePar}>Finance App</p>
          </div>
        </div>
        <div
          style={{
            height: 538,
          }}
          className={style.formContainer}
        >
          <div className={style.signInLogoContainer}>
            <img
              src="/static/media/logo.49db5ab8.svg"
              alt="logo"
              className={style.signInLogo}
            />
            <h1>Wallet</h1>
          </div>
          <form className={style.formSignIn} onSubmit={handleSubmit}>
            <input
              className={style.signInEmail}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="email*"
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <input
              className={style.signInPassword}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="password*"
            />
            <PasswordStrengthMeter password={values.password} />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
            <input
              className={style.signInPassword}
              type="password"
              name="passwordConfirm"
              value={values.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="confirm password*"
            />
            {errors.passwordConfirm && touched.passwordConfirm && (
              <div className="input-feedback">{errors.passwordConfirm}</div>
            )}
            <input
              className={style.signInName}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name*"
            />
            {errors.name && touched.name && (
              <div className="input-feedback">{errors.name}</div>
            )}
            <button className={style.signInButton} type="submit">
              Регистация
            </button>
            <p>{errorMessage}</p>
          </form>
        </div>
      </div>
    );
  }
}

const mSTP = state => ({
  errorMessage: getError(state),
});

export default connect(mSTP)(SignUp);
