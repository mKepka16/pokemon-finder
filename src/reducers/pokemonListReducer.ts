import { PokemonDispatchTypes, PokemonsList, POKEMONS_LOADING, POKEMONS_FAIL, POKEMONS_SUCCESS } from './../actions/pokemonListActionTypes';

interface DefaultStateI {
  isLoading: boolean,
  pokemons?: PokemonsList
}

const defaultState: DefaultStateI = {
  isLoading: false
}

export const pokemonListReducer = (state: DefaultStateI =  defaultState, action: PokemonDispatchTypes): DefaultStateI => {
  switch(action.type) {
    case POKEMONS_LOADING:
      return {
        isLoading: true
      }
    case POKEMONS_FAIL: 
      return {
        isLoading: false,
      }
    case POKEMONS_SUCCESS:
      return {
        isLoading: false,
        pokemons: action.payload
      }
    default:
      return state;
  }
}