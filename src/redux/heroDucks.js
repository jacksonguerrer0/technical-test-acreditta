// Variables

import types from "./types/types";

const initialState = {
  listHeroes: [],
  renderHeroes: [],
  habilitiesOrderAZ: true,
  appearanceOrderAZ: true
}

// Reducer
const heroDucks = (state = initialState, action) => {
  switch (action.type) {
    case types.getHeroes:
      return {
        ...state,
        listHeroes : action.payload,
        renderHeroes: action.payload
      }
    case types.getSearch:
      return {
        ...state,
        renderHeroes: action.payload
      }
    case types.habilitiesOrderAZ:
      return {
        ...state,
        habilitiesOrderAZ: action.payload
      }
    case types.appearanceOrderAZ:
      return {
        ...state,
        appearanceOrderAZ: action.payload
      }
    default:
      return state;
  }
}
export default heroDucks


// Actions

export const listHero = (list) => ({
  type: types.getHeroes,
  payload: list
})
export const listSearchHero = (list) => ({
  type: types.getSearch,
  payload: list
})
export const habilitiesOrderAZ = (res) => ({
  type: types.habilitiesOrderAZ,
  payload: res
})
export const appearanceOrderAZ = (res) => ({
  type: types.appearanceOrderAZ,
  payload: res
})