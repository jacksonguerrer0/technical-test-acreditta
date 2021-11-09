import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './list-hero-style/listHero.css'

const ListHero = () => {
  const {listHeroes} = useSelector(state => state.heroes)
  const [heroes, setHeroes] = useState(listHeroes)
  useEffect(() => {
    setHeroes(listHeroes.slice(0,100))
  }, [listHeroes])
  console.log(heroes)
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
                <p>Inteligencia: {habilities.intelligence} </p>
                <p>Fuerza: {habilities.strength}</p>
                <p>Velocidad: {habilities.speed}</p>
                <p>Durabilidad: {habilities.durability}</p>
                <p>Poder: {habilities.power}</p>
                <p>Combate: {habilities.combat}</p>
              </details>
              <details>
                <summary><b>Apariencia</b></summary>
                <p></p>
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
