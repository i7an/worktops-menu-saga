import {
  SELECT_EDGE_COLOUR,
  EDGE_COLOURS_FETCH_REQUESTED,
  EDGE_COLOURS_FETCH_SUCCEEDED
 } from './const'

export function selectEdgeColour(payload) {
  return { type: SELECT_EDGE_COLOUR, payload }
}

export function fetchSucceeded(payload) {
  return { type: EDGE_COLOURS_FETCH_SUCCEEDED, payload }
}

export function fetchRequested(payload) {
  return { type: EDGE_COLOURS_FETCH_REQUESTED }
}
