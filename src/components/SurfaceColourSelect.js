import Select from './Select'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectSurfaceColour } from '../actions/surfaceColoursActions'

function mapStateToProps(state) {
  return {
    items: state.surfaceColours.list,
    selectedItem: state.surfaceColours.selected,
    disabled: state.surfaceColours.disabled,
    title: 'Surface Colour'
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: bindActionCreators(selectSurfaceColour, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Select)
