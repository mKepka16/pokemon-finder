import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../actions/pokemonActions';
import { getPokemonList } from '../actions/pokemonListActions';
import { RootStore } from '../store';
import DataList from './DataList';
import './Search.css';

const Search = () => {
  const { pokemonsList } = useSelector((state: RootStore) => state);
  const [pokemonName, setPokemonName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(getPokemon(pokemonName));
  }

  useEffect(() => {
    dispatch(getPokemonList());
  }, [])

  return (
    <div className="search-box">
      <DataList pokemons={ pokemonsList.pokemons?.results } setPokemon={ setPokemonName }/>
      <button onClick={ handleSubmit }>Search</button>
    </div>
  )
}

export default Search;