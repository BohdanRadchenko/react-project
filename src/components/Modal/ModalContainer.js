import { connect } from 'react-redux';
import Modal from './Modal';
import postTransaction from '../../redux/finance/financeOperations';

const mapDispatchToProps = {
  postTransaction,
};

export default connect(
  null,
  mapDispatchToProps,
)(Modal);
