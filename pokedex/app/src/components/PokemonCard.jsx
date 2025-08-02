import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logic from '../logic'
import TypingDiv from './TypingDiv'

function PokemonCard({ id, color }){
    const [pokemon, setPokemon] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        try {
            logic.retrievePokemonById(id)
                .then(setPokemon)
        } catch (error) {
            alert(error)
        }
    }, [])

    return (
        (!!pokemon) && <button
            key={pokemon.id}
            className="border rounded-md text-center flex flex-col h-full bg-[aliceblue] p-0
                       hover:border-2 hover:shadow-md hover:border-black transition-all duration-200"
            onClick={() => navigate(`/pokemon/${pokemon.id}`)}
        >
            <TypingDiv typingNames={pokemon.typing}/>

            <img 
                src={`${pokemon.spritePath}`} 
                alt={`${pokemon.name}`}
                className='flex-shrink-0'
            />
            
            <div 
                style={{ backgroundColor: color }}
                className="p-0 h-6 rounded-b-md text-xs flex items-center justify-center"
            >
                #{pokemon.id} {pokemon.name}
            </div>            
        </button>
    )
}

export default PokemonCard