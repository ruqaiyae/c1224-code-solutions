import { Pokemon } from './App';

type PokemonList = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: PokemonList) {
  const listItems = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{listItems}</ul>;
}
