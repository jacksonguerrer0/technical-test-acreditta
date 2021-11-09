import axios from 'axios'
import { listHero } from '../redux/heroDucks'

export const getSuperHero = async (dispatch) => {
  const res = await axios.get(`https://superheroapi.com/api/643351433351950/search/a`)
  dispatch(listHero(res.data.results))
}