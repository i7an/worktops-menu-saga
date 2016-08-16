/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  list: ['Luxury Laminate', 'Timber'],
  selected: ''
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case 'SELECT_MATERIAL': {
      let selected = action.payload
      return { ...state, selected }
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
