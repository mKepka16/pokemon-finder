import { combineReducers } from 'redux';
import { pokemonListReducer } from './pokemonListReducer';
import pokemonReducer from './pokemonReducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonsList: pokemonListReducer
});

export default rootReducer;