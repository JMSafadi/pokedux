import React from 'react';
import Logo from './Logo';
import PokemonCard from './PokemonCard';
import PokeTypes from './PokeTypes';
import Searcher from './Searcher';

const PokemonList = ({ pokemons }) => {

    return (
        <>
            <Logo/>
            <Searcher/>
            <PokeTypes/>
            <div className='pokemonList'>
                { pokemons.map((pokemon) => {
                    return <PokemonCard 
                    name={pokemon.name} 
                    key={pokemon.name} 
                    image={pokemon.sprites.front_default} 
                    types={pokemon.types} 
                    id={pokemon.id} 
                    favorite={pokemon.favorite}/>
                }) }
            </div>
        </>
    );
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''), // ['', '']
}

export default PokemonList;
