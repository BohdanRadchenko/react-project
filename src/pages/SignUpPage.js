import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import SignUp from '../components/Authentication/SignUp';

const SignUpPage = ({ history }) => <SignUp history={history} />;

SignUpPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default SignUpPage;
