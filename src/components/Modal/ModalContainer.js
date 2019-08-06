import { connect } from 'react-redux';
import {
  addIncomeTransaction,
  addCostTransaction,
} from '../../redux/finance/financeActions';
import Modal from './Modal';

const mapDispatchToProps = {
  addIncomeTransaction,
  addCostTransaction,
};

export default connect(
  null,
  mapDispatchToProps,
)(Modal);
