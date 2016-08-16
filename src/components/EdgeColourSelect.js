import Select from './Select'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectEdgeColour } from '../actions/edgeColoursActions'

function mapStateToProps(state) {
  return {
    items: state.edgeColours.list,
    selectedItem: state.edgeColours.selected,
    disabled: state.edgeColours.disabled,
    title: 'Edge Colour'
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: bindActionCreators(selectEdgeColour, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Select)
