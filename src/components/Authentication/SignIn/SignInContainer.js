import { connect } from 'react-redux';
import {
  getError,
  isAuthentificated,
} from '../../../redux/session/sessionSelectors';
import {
  googleSignIn,
  facebookSignIn,
} from '../../../redux/session/socialOperations';
import SignIn from './SignIn';

const mSTP = state => ({
  errorMessage: getError(state),
  authentificated: isAuthentificated(state),
});

const mDTP = {
  googleSignIn,
  facebookSignIn,
};

export default connect(
  mSTP,
  mDTP,
)(SignIn);
