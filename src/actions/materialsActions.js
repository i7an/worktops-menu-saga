import { SELECT_MATERIAL } from './const'

export function selectMaterial(payload) {
  return { type: SELECT_MATERIAL, payload }
}
