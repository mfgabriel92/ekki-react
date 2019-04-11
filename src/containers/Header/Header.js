import Header from '../../components/Header'
import { connect } from 'react-redux'
import { me } from '../../actions/me'

const mapActionCreators = {
  me
}

const mapStateToProps = state => ({
  myself: state.me
})

export default connect(mapStateToProps, mapActionCreators)(Header)