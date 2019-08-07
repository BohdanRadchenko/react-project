import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import SignIn from '../components/Authentication/SignIn';

const SignInPage = ({ history }) => <SignIn history={history} />;

SignInPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default SignInPage;
