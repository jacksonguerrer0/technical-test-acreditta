import axios from 'axios'
import { listHero, listSearchHero } from '../redux/heroDucks'

export const getSuperHero = async (dispatch) => {
  const res = await axios.get(`https://superheroapi.com/api/643351433351950/search/Batman`)
  dispatch(listHero(res.data.results))
}

export const getSearchSuperHero = async (text, dispatch) => {
  const res = await axios.get(`https://superheroapi.com/api/643351433351950/search/${text}`)
  dispatch(listSearchHero(res.data.results))
}