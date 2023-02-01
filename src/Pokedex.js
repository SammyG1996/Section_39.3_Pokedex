import React from 'react';
import pokemon from './pokemondb';
import Pokecard from './Pokecard';
import "./Pokedex.css"


const Pokedex = () => {

    return(
        <div className='Pokedex'>
            {pokemon.map( p => <Pokecard key={p.id} pokeName={p.name} type={p.type} exp={p.exp} img={p.img} /> )}
        </div>
    )

}

export default Pokedex