export const POKEMONS_SUCCESS = 'POKEMONS_SUCCESS';
export const POKEMONS_FAIL = 'POKEMONS_FAIL';
export const POKEMONS_LOADING = 'POKEMONS_LOADING';


export type Pokemon = {
  name: string
}

export type PokemonsList = {
  count: number,
  results: Pokemon[]
}


export interface PokemonsFail {
  type: typeof POKEMONS_FAIL
}

export interface PokemonsLoading {
  type: typeof POKEMONS_LOADING
}

export interface PokemonsSuccess {
  type: typeof POKEMONS_SUCCESS
  payload: PokemonsList
}

export type PokemonDispatchTypes = PokemonsLoading | PokemonsFail | PokemonsSuccess;

