import React, { useState } from 'react'
import { InputGroup, FormControl, SplitButton, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { appearanceOrderAZ, habilitiesOrderAZ } from '../redux/heroDucks';
import { getSearchSuperHero } from '../services/api_hero';

const Search = () => {
  const [search, setSearch] = useState('Batman');
  const heroesStore = useSelector(state => state.heroes)
  const dispatch = useDispatch()
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleClickSearch = () => {
    getSearchSuperHero(search, dispatch)
  }
  const handleHabilitiesOrder = () => {
    dispatch(habilitiesOrderAZ(!(heroesStore.habilitiesOrderAZ)))
  }
  const handleAppearanceOrder = () => {
    dispatch(appearanceOrderAZ(!(heroesStore.appearanceOrderAZ)))
  }
  return (
    <div className='col-sm-8 m-auto mb-5'>
    <InputGroup className="mb-3">
      <FormControl aria-label="Text input with dropdown button" defaultValue='Batman' onChange={handleSearch}/>
      <SplitButton
        variant="outline-secondary"
        title="Buscar"
        id="segmented-button-dropdown-2"
        alignRight
        onClick={handleClickSearch}
      >
        <Dropdown.Item onClick={handleHabilitiesOrder}>Habilidades <i className="bi bi-chevron-double-up"></i></Dropdown.Item>
        <Dropdown.Item onClick={handleAppearanceOrder}>Apariencia <i className="bi bi-chevron-double-down"></i></Dropdown.Item>
      </SplitButton>
    </InputGroup>
    </div>
  )
}

export default Search
