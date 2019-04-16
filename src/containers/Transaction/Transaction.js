import Transaction from '../../components/Transaction'
import { connect } from 'react-redux'
import { getBeneficiaries } from '../../actions/beneficiary'
import { addTransaction } from '../../actions/transaction'

const mapActionCreators = {
  getBeneficiaries,
  addTransaction
}

const mapStateToProps = state => ({
  beneficiary: state.beneficiary.getBeneficiaries,
  transaction: state.transaction.addTransaction
})

export default connect(mapStateToProps, mapActionCreators)(Transaction)