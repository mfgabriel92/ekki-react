import Home from '../../components/Home'
import { connect } from 'react-redux'
import { me } from '../../actions/me'

const mapActionCreators = {
  me
}

const mapStateToProps = state => ({
  myself: state.me
})

export default connect(mapStateToProps, mapActionCreators)(Home)