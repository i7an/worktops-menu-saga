import Select from './Select'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectMaterial } from 'actions/materialsActions'

function mapStateToProps(state) {
  return {
    items: state.materials.list,
    selectedItem: state.materials.selected,
    disabled: false,
    title: 'Material'
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: bindActionCreators(selectMaterial, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Select)
