import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSuperHero } from '../services/api_hero'

const Home = () => {
  const dispatch = useDispatch()
  const {listHeroes} = useSelector(state => state.heroes)

  
  useEffect(() => {
      getSuperHero(dispatch)
  }, [dispatch])

  return (
    <div>
      <h1>Bienvenidos a Api Hero</h1>
    </div>
  )
}

export default Home
