import axios from "axios";
import { Dispatch } from "redux";
import { PokemonDispatchTypes } from "./pokemonListActionTypes";
import { POKEMONS_FAIL, POKEMONS_SUCCESS, POKEMONS_LOADING } from './pokemonListActionTypes'

export const getPokemonList = () => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
  try {
    dispatch({
      type: POKEMONS_LOADING
    })

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118')
    
    dispatch({
      type: POKEMONS_SUCCESS,
      payload: response.data
    })
  }
  catch (error) {
    dispatch({
      type: POKEMONS_FAIL
    })
  }
}