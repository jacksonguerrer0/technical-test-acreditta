import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ListHero from '../components/ListHero'
import Search from '../components/Search'
import { getSuperHero } from '../services/api_hero'
import './style-home/styleHome.css'
const Home = () => {
  const dispatch = useDispatch()


  useEffect(() => {
      getSuperHero(dispatch)
  }, [dispatch])

  return (
    <main className='container-fluid p-0'>
      <section className='hero-img'>
        <h1>Encuentra tu <br /> SúperHeroe😎</h1>
      </section>
      <section className='container-md mt-5 mb-5'>
          <Search  />
          <ListHero  />
      </section>
    </main>
  )
}

export default Home
