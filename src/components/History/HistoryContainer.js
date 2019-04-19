import History from '../../components/History'
import { connect } from 'react-redux'
import { getTransactions } from '../../actions/transaction'

const mapActionCreators = {
  getTransactions
}

const mapStateToProps = state => ({
  transaction: state.transaction.getTransactions
})

export default connect(mapStateToProps, mapActionCreators)(History)