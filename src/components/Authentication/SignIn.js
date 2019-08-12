import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { NavLink } from 'react-router-dom';
import style from './Authentication.module.css';
import img from './img/sq.png';

import {
  getError,
  isAuthentificated,
} from '../../redux/session/sessionSelectors';

class SignIn extends Component {
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
    history: ReactRouterPropTypes.history.isRequired,
    authentificated: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleEnterSubmit);
  }

  componentDidUpdate() {
    const { authentificated, history } = this.props;
    if (authentificated) {
      history.replace('/dashboard');
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleEnterSubmit);
  }

  handleEnterSubmit = ({ code }) =>
    code === 'Enter' || code === 'NumpadEnter'
      ? this.props.handleSubmit()
      : null;

  render() {
    const {
      errorMessage,
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
          <img alt="Financ App" className={style.backgroundIMG} src={img} />
          <div className={style.iphoneIMG}>
            <div className={style.test}>
              <p className={style.financePar}>Finance App</p>
            </div>
          </div>
        </div>

        <div className={style.formContainer}>
          <div className={style.signInLogoContainer}>
            <img
              src="/static/media/logo.49db5ab8.svg"
              alt="logo"
              className={style.signInLogo}
            />
            <h1>Wallet</h1>
          </div>

          <form onSubmit={handleSubmit} className={style.formSignIn}>
            <input
              className={style.signInEmail}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="E-mail"
            />

            {errors.email && touched.email && (
              <div className={style.inputError}>{errors.email}</div>
            )}
            <input
              className={style.signInName}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password*"
            />
            {errors.password && touched.password && (
              <div className={style.inputError}>{errors.password}</div>
            )}
            <button className={style.signInButton} type="submit">
              Sign in
            </button>
            <NavLink to="/signUp">
              <button type="button" className={style.signUpLink}>
                Sign up
              </button>
            </NavLink>
            <p className={style.inputError}>{errorMessage}</p>
          </form>
        </div>
      </div>
    );
  }
}

const mSTP = state => ({
  errorMessage: getError(state),
  authentificated: isAuthentificated(state),
});

export default connect(mSTP)(SignIn);
