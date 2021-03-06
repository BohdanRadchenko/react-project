import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import SignUp from '../components/Authentication/signUp/SignUpContainer';
import { signUp } from '../redux/session/sessionOperations';
import authRedirectHoc from '../components/authRedirectHoc/authRedirectHoc';

const SignUpPage = ({ onSignUp }) => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const { email, password, name } = values;
          onSignUp({ email, password, name });
          setSubmitting(false);
        }, 100);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Email is required'),
        password: Yup.string()
          .min(6)
          .max(16)
          .required('Password is required'),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Please confirm your password'),
        name: Yup.string().required('Name is required'),
      })}
    >
      {props => <SignUp {...props} />}
    </Formik>
  </div>
);

SignUpPage.propTypes = {
  onSignUp: PropTypes.func.isRequired,
};

const mDTP = {
  onSignUp: signUp,
};

export default connect(
  null,
  mDTP,
)(authRedirectHoc(SignUpPage));
