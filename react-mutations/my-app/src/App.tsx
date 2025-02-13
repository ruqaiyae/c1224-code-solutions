/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useState } from 'react';
import { Pokemon, PokemonList } from './PokemonList';

export function App() {
  const [pokedex, setPokedex] = useState([
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ]);

  function handleAdd(): void {
    setPokedex([...pokedex, { number: '012', name: 'some Pokemon' }]);
  }

  function handleUpdate(): void {
    setPokedex(
      pokedex.map((pokemon) =>
        pokemon.number === '012'
          ? { number: '002', name: 'some other Pokemon' }
          : pokemon
      )
    );
  }

  function handleRemove(): void {
    setPokedex(pokedex.filter((pokemon) => pokemon.number !== '002'));
  }

  return (
    <div>
      <PokemonList pokedex={pokedex} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
