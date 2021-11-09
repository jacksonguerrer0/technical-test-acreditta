// Variables

import types from "./types/types";

const initialState = {
  listHeroes: [],
}

// Reducer
const heroDucks = (state = initialState, action) => {
  switch (action.type) {
    case types.getHeroes:
      return {
        ...state,
        listHeroes : action.payload
      }
    default:
      return state;
  }
}
export default heroDucks


// Actions
// export const getListHero = (heroes) => (dispatch) => {
//   dispatch(listHero(heroes))
// }
export const listHero = (list) => ({
  type: types.getHeroes,
  payload: list
})
