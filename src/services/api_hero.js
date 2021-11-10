import axios from 'axios'
import { getFormaterHero } from '../helpers/functions'
import { getResSearch, listHero, listSearchHero } from '../redux/heroDucks'

export const getSuperHero = async (dispatch) => {
  const res = await axios.get(`https://superheroapi.com/api/643351433351950/search/Batman`)
  const listHeroData = [...res.data.results]
  const heroes = await getFormaterHero(listHeroData)
  dispatch(listHero(heroes))
}

export const getSearchSuperHero = async (text, dispatch) => {
  try {
    const res = await axios.get(`https://superheroapi.com/api/643351433351950/search/${text}`)
    if(res.data.response === 'error'){
      return dispatch(getResSearch(res.data.error))
    }
    const listHeroData = [...res.data.results]
    const listHero = getFormaterHero(listHeroData)
    dispatch(listSearchHero(listHero))
    dispatch(getResSearch(''))

  } catch (error) {
  }
}