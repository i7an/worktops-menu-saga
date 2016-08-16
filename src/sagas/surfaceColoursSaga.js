import { takeEvery } from 'redux-saga'
import { put, call, fork } from 'redux-saga/effects'
import { getSurfaceColours } from '../sources/api'
import {
  fetchRequested,
  fetchSucceeded
} from '../actions/surfaceColoursActions'

function* reloadSurfaceColours(action) {
  yield put(fetchRequested())
  const colours = yield call(getSurfaceColours, action.payload)
  yield put(fetchSucceeded(colours))
}

export default function* watchMaterialAsync() {
  yield fork(takeEvery, 'SELECT_MATERIAL', reloadSurfaceColours)
}
