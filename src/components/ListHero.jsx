import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {  habilitiesOrder } from '../helpers/functions'
import './list-hero-style/listHero.css'

const ListHero = () => {
  const {renderHeroes, habilitiesOrderAZ, appearanceOrderAZ, resSearch} = useSelector(state => state.heroes)
  const [heroes, setHeroes] = useState([])
  const [res, setRes] = useState('')
  useEffect(() => {
    setHeroes(renderHeroes)
    setRes(resSearch)
  }, [renderHeroes, resSearch ])
  if(res.length > 0){
    return (
      <h1>{res}</h1>
    )
  }
  return (
    <section className='col-12 m-auto row container-card'>
      {
        heroes?.map(ele => {
          let habilities = ele.powerstats;
          let appearance = ele.appearance;
          return (
            <Card style={{ width: '10rem' }} key={ele.id} className='col-3 m-1' >
            <Card.Img variant="top" src={ele?.image?.url} />
            <Card.Body>
              <Card.Title>{ele.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush mb-1">
              <details>
                <summary><b>Habilidades</b></summary>
                {
                  habilitiesOrder(habilities, habilitiesOrderAZ)
                }
              </details>
              <details>
                <summary><b>Apariencia</b></summary>
                {
                  habilitiesOrder(appearance, appearanceOrderAZ)
                }
              </details>
            </ListGroup>
          </Card>
          )
        })
      }
    </section>
  )
}

export default ListHero
