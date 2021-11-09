import React from 'react'
import { InputGroup, FormControl, SplitButton, Dropdown } from 'react-bootstrap'

const Search = () => {
  return (
    <div className='col-sm-8 m-auto mb-5'>
    <InputGroup className="mb-3">
      <FormControl aria-label="Text input with dropdown button" placecholder='df'/>
      <SplitButton
        variant="outline-secondary"
        title="Buscar"
        id="segmented-button-dropdown-2"
        alignRight
      >
        <Dropdown.Item href="#">Habilidades</Dropdown.Item>
        <Dropdown.Item href="#">Apariencia</Dropdown.Item>
      </SplitButton>
    </InputGroup>
    <div>
      <label ><input type="radio" name="" id="" />Inteligencia</label>
      <label ><input type="radio" name="" id="" />Fuerza</label>
      <label ><input type="radio" name="" id="" />Velocidad</label>
      <label ><input type="radio" name="" id="" />Durabilidad</label>
      <label ><input type="radio" name="" id="" />Poder</label>
      <label ><input type="radio" name="" id="" />Combate</label>
    </div>
    </div>
  )
}

export default Search
