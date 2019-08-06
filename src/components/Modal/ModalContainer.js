import { connect } from 'react-redux';
import Modal from './Modal';
import postTransaction from '../../redux/finance/financeOperations';
import { getToken } from '../../redux/session/sessionSelectors';
import { getError } from '../../redux/finance/financeSelectors';

const mapStateToProps = state => ({
  token: getToken(state),
  error: getError(state),
});

const mapDispatchToProps = {
  postTransaction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
