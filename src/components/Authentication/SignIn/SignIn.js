import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Link } from 'react-router-dom';
import casualPropTypes from '../propTypes';
import style from '../Authentication.module.css';
import img from '../img/sq.png';
import css from '../SignUp.module.css';
import SocialsAuth from '../SocialsAuth';

class SignIn extends Component {
  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    authentificated: PropTypes.bool.isRequired,
    ...casualPropTypes,
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

  handleFacebookSignIn = response => this.props.facebookSignIn(response);

  handleGoogleSignIn = response => this.props.googleSignIn(response);

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
              className={`${style.signInEmail} ${errors.email &&
                style.errorInput}`}
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
              className={`${style.signInName} ${errors.password &&
                style.errorInput}`}
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
            <p className={style.inputError}>{errorMessage}</p>
            <SocialsAuth
              text="Sign in with: "
              handleAuthFacebook={this.handleFacebookSignIn}
              handleAuthGoogle={this.handleGoogleSignIn}
            />
            <button className={style.signInButton} type="submit">
              Sign in
            </button>
          </form>
          <Link to="/signup" className={css.link}>
            <h2 type="button" className={`${css.linkText} ${css.linkSignIn}`}>
              Sign up
            </h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
