import {
  SELECT_SURFACE_COLOUR,
  SURFACE_COLOURS_FETCH_REQUESTED,
  SURFACE_COLOURS_FETCH_SUCCEEDED
} from './const';

export function fetchRequested() {
  return { type: SURFACE_COLOURS_FETCH_REQUESTED }
}

export function fetchSucceeded(colours) {
  return { type: SURFACE_COLOURS_FETCH_SUCCEEDED, payload: colours }
}

export function selectSurfaceColour(payload) {
  return { type: SELECT_SURFACE_COLOUR, payload }
}
