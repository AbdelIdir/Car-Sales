import * as types from "./actionTypes";

export function addFeature(newFeature) {
  return {
    type: types.ADD_FEATURE,
    payload: { newFeature }
  };
}

export function removeFeature(id) {
  return {
    type: types.REMOVE_FEATURE,
    payload: { id }
  };
}

export function calculateTotal() {
  return {
    type: types.CALC_TOTAL
  };
}
