import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from '../../redux/session/sessionSelectors';

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
      <form
        onSubmit={handleSubmit}
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
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="email"
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
          placeholder="password"
        />
        {errors.password && touched.password && (
          <div className="input-feedback">{errors.password}</div>
        )}
        <button type="submit">Войти</button>
        <p>{errorMessage}</p>
      </form>
    );
  }
}

const mSTP = state => ({ errorMessage: getError(state) });

export default connect(mSTP)(SignIn);
