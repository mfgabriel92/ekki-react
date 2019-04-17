import Home from '../../components/Home'
import { connect } from 'react-redux'

const mapActionCreators = {
}

const mapStateToProps = (state, props) => ({
  ...props
})

export default connect(mapStateToProps, mapActionCreators)(Home)