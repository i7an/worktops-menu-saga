const redux = require('redux')
const reducers = require('../reducers')

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

module.exports = function(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = redux.createStore(
    reducers,
    initialState,
    redux.applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
