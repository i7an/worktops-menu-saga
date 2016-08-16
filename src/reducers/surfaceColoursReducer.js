/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  list: [],
  selected: '',
  disabled: true
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    case 'SELECT_MATERIAL':
      return { ...state, selected: '' }
    case 'SELECT_SURFACE_COLOUR': {
      let selected = action.payload
      return { ...state, selected }
    }
    case 'SURFACE_COLOURS_FETCH_REQUESTED':
      return { ...state,
        list: [],
        disabled: true,
        selected: ''
      }
    case 'SURFACE_COLOURS_FETCH_SUCCEEDED': {
      let colours = action.payload
      return { ...state,
        list: colours,
        disabled: false,
        selected: ''
      }
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
