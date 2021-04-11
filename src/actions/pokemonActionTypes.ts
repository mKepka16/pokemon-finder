export const POKEMON_LOADING = 'POKEMON_LOADING';
export const POKEMON_FAIL = 'POKEMON_FAIL';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';

export type PokemonAbility = {
  ability: {
    name: string,
    url: string
  }
}

export type SimplifiedPokemonAbility = {
  name: string,
  effect: string
}

export type PokemonSprites = {
  front_default: string
}

export type PokemonStats = {
  base_stat: number,
  stat: {
    name: string
  }
}

export type PokemonType = {
  abilities: SimplifiedPokemonAbility[],
  sprites: PokemonSprites,
  stats: PokemonStats[],
  name: string
}

export type PokemonApiInfo = {
  abilities: PokemonAbility[],
  sprites: PokemonSprites,
  stats: PokemonStats[],
  name: string
}

export type AbilityEffect = {
  short_effect: string,
  language: {
    name: string
  }
}

export type AbilityDescription = {
  effect_entries: AbilityEffect[],
  name: string
}

export type AbilityWithShortDescription = {
  name: string,
  effect: string  
}




export interface PokemonLoading {
  type: typeof POKEMON_LOADING
}

export interface PokemonFail {
  type: typeof POKEMON_FAIL

}

export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS
  payload: PokemonType,
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess;

