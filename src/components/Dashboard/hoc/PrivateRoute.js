import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthentificated } from '../../../redux/session/sessionSelectors';
/*eslint-disable*/
const ProtectedComponent = ({
  component: Component,
  authentificated,
  ...rest
}) => {
  // const getToken = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        authentificated ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

const mapStateToProps = state => ({
  authentificated: isAuthentificated(state),
});

export default connect(
  mapStateToProps,
  null,
)(ProtectedComponent);
