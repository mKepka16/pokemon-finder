import axios from 'axios';
import { Dispatch } from 'redux';
import { PokemonDispatchTypes, PokemonType, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS, AbilityDescription, AbilityWithShortDescription, PokemonApiInfo } from './pokemonActionTypes'

export const getPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
  try {
    dispatch({
      type: POKEMON_LOADING
    })

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const pokemonInfo: PokemonApiInfo = response.data;
    const promises: Promise<any>[] = [];

    pokemonInfo.abilities.forEach(ability => {
      const promise = axios.get(ability.ability.url);
      promises.push(promise);
    })

    const responses = await Promise.all(promises)
    const abilities: AbilityWithShortDescription[] = responses.map(response => {
      const ability: AbilityDescription = response.data;
      const effect = ability.effect_entries.filter(effect => {
        return effect.language.name == 'en';
      })[0].short_effect;

      const name = ability.name;

      return { name, effect }
    })

    const pokemonWithSimplifiedAbilities: PokemonType = {
      ...pokemonInfo,
      abilities
    };
    


    dispatch({
      type: POKEMON_SUCCESS,
      payload: {
        ...pokemonWithSimplifiedAbilities,
        name: pokemon
      }
    })
  }
  catch (error) {
    dispatch({
      type: POKEMON_FAIL
    })
  }
}