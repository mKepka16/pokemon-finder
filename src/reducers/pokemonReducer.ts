import { PokemonType, PokemonDispatchTypes, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from './../actions/pokemonActionTypes';

interface DefaultStateI {
  isLoading: boolean,
  pokemon?: PokemonType,
}

const defaultState: DefaultStateI = {
  isLoading: false,
}

const pokemonReducer = (state: DefaultStateI = defaultState, action: PokemonDispatchTypes): DefaultStateI => {
  switch(action.type) {
    case POKEMON_FAIL:
      return {
        isLoading: false
      }
    case POKEMON_LOADING:
      return {
        isLoading: true
      }
    case POKEMON_SUCCESS:
      return {
        isLoading: false,
        pokemon: action.payload
      }
    default:
      return state;
  }
} 

export default pokemonReducer;

