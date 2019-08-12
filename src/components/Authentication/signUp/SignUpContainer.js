import { connect } from 'react-redux';
import { getError } from '../../../redux/session/sessionSelectors';
import {
  facebookSignUp,
  googleSignUp,
} from '../../../redux/session/socialOperations';
import SignUp from './SignUp';

const mSTP = state => ({
  errorMessage: getError(state),
});

const mDTP = {
  facebookAuth: facebookSignUp,
  googleAuth: googleSignUp,
};

export default connect(
  mSTP,
  mDTP,
)(SignUp);
