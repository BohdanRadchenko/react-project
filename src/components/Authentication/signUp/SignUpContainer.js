import { connect } from 'react-redux';
import { getError } from '../../../redux/session/sessionSelectors';
import {
  facebookAuth,
  googleAuth,
} from '../../../redux/session/socialOperations';
import SignUp from './SignUp';

const mSTP = state => ({
  errorMessage: getError(state),
});

const mDTP = {
  facebookAuth,
  googleAuth,
};

export default connect(
  mSTP,
  mDTP,
)(SignUp);
