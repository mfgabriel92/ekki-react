import History from '../../components/History'
import { connect } from 'react-redux'
import { getHistory } from '../../actions/history'

const mapActionCreators = {
  getHistory
}

const mapStateToProps = state => ({
  history: state.history
})

export default connect(mapStateToProps, mapActionCreators)(History)