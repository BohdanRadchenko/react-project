import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import SignIn from '../components/Authentication/SignIn';
import { signIn } from '../redux/session/sessionOperations';

const SignInPage = ({ onSignIn }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        const { email, password, name } = values;
        onSignIn({ email, password, name });
        setSubmitting(false);
      }, 100);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required('Email is required'),
      password: Yup.string()
        .min(4)
        .max(16)
        .required('Password is required'),
    })}
  >
    {props => <SignIn {...props} />}
  </Formik>
);

SignInPage.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

const mDTP = {
  onSignIn: signIn,
};

export default connect(
  null,
  mDTP,
)(SignInPage);
