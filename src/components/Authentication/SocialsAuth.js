import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import socials from './Socials.module.css';
// set HTTPS=true&&
const SocialsAuth = ({ text, handleAuthFacebook, handleAuthGoogle }) => (
  <div className={socials.wrapper}>
    <p className={socials.signUpText}>{text}</p>
    <FacebookLogin
      icon="fa-facebook"
      appId="2427356803992856"
      fields="name,email,picture"
      callback={handleAuthFacebook}
      render={renderProps => (
        <button
          type="button"
          className={`${socials.icon} ${socials.facebookAuth}`}
          onClick={renderProps.onClick}
        />
      )}
    />
    <GoogleLogin
      clientId="389473601338-srrd09vmriq6ujv6pfltur1n5ctnqi5c.apps.googleusercontent.com"
      buttonText="LOGIN WITH GOOGLE"
      onSuccess={handleAuthGoogle}
      onFailure={handleAuthGoogle}
      render={renderProps => (
        <button
          type="button"
          onClick={renderProps.onClick}
          className={` ${socials.icon} ${socials.googleAuth}`}
          disabled={renderProps.disabled}
        />
      )}
    />
  </div>
);

SocialsAuth.defaultProps = {
  text: 'Use this to enter: ',
};

SocialsAuth.propTypes = {
  handleAuthFacebook: PropTypes.func.isRequired,
  handleAuthGoogle: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default SocialsAuth;
