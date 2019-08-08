import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from '../../redux/session/sessionSelectors';
import './test.css';
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
      <form
        onSubmit={handleSubmit}
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
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="email*"
        />
        {errors.email && touched.email && (
          <div className="input-feedback">{errors.email}</div>
        )}
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="password*"
        />
        <PasswordStrengthMeter password={values.password} />
        {errors.password && touched.password && (
          <div className="input-feedback">{errors.password}</div>
        )}
        <input
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
        <button type="submit">Регистация</button>
        <p>{errorMessage}</p>
      </form>
    );
  }
}

const mSTP = state => ({
  errorMessage: getError(state),
});

export default connect(mSTP)(SignUp);
