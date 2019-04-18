import FlashMessage from './FlashMessage'
import { connect } from 'react-redux'

const mapActionCreators = {
}

const mapStateToProps = state => ({
  flash: state.app.flashMessage
})

export default connect(mapStateToProps, mapActionCreators)(FlashMessage)