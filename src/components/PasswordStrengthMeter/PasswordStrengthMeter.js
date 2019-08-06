import React from 'react';
import zxcvbn from 'zxcvbn';
import PropTypes from 'prop-types';

const createPasswordLabel = result => {
  switch (result.score) {
    case 0:
      return 'Weak';
    case 1:
      return 'Weak';
    case 2:
      return 'Good';
    case 3:
      return 'Strong';
    case 4:
      return 'Very strong!';
    default:
      return 'Weak';
  }
};

const PasswordStrengthMeter = ({ password }) => {
  const testedResult = zxcvbn(password);

  return (
    <div className="password-strength-meter">
      <br />
      <progress
        value={testedResult.score}
        max="4"
        className={`password-strength-meter-progress strength-${createPasswordLabel(
          testedResult,
        )}`}
      />
      {password && (
        <>
          <strong>Password strength:</strong>
          {createPasswordLabel(testedResult)}
        </>
      )}
    </div>
  );
};

PasswordStrengthMeter.defaultProps = {
  password: '',
};

PasswordStrengthMeter.propTypes = {
  password: PropTypes.string,
};

export default PasswordStrengthMeter;
