import Beneficiary from '../../components/Beneficiary'
import { connect } from 'react-redux'
import { addBeneficiary } from '../../actions/beneficiary'

const mapActionCreators = {
  addBeneficiary
}

const mapStateToProps = state => ({
  beneficiary: state.beneficiary.addBeneficiary
})

export default connect(mapStateToProps, mapActionCreators)(Beneficiary)