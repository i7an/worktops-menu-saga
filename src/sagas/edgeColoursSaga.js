import { takeEvery } from 'redux-saga'
import { put, call, fork, select } from 'redux-saga/effects'
import { getEdgeColours } from '../sources/api'
import {
  fetchRequested,
  fetchSucceeded
} from '../actions/edgeColoursActions'

function* reloadEdgeColours(action) {
  const state = yield select()
  let material = state.materials.selected
  let surfaceColour = state.surfaceColours.selected
  yield put(fetchRequested())

  try {
    const colours = yield call(getEdgeColours, material, surfaceColour)
    yield put(fetchSucceeded(colours))
  } catch (error) {
    // ignore the error
  }
}

export default function* watchMaterialAndSurfaceColourAsync() {
  yield fork(takeEvery, 'SELECT_MATERIAL', reloadEdgeColours)
  yield fork(takeEvery, 'SELECT_SURFACE_COLOUR', reloadEdgeColours)
}
