import React, { useState } from 'react'
import { Pokemon } from '../actions/pokemonListActionTypes';
import './DataList.css';

interface Props {
  pokemons?: Pokemon[],
  setPokemon: React.Dispatch<React.SetStateAction<string>>
}

const DataList: React.FC<Props> = (props) => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div className="search-box">
      <input type="text" list="pokemons" value={ pokemonName } onChange={ e => { setPokemonName(e.target.value); props.setPokemon(e.target.value) }}/>

      <datalist id="pokemons">
        { props.pokemons && props.pokemons.map((pokemon, key) => (
          <option value={ pokemon.name } key={ key }></option>
        )) }
      </datalist>
    </div>
  )
}

export default DataList;