import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import logic from '../logic'
import PokemonCardDetails from '../components/PokemonDetailsCard'

function PokemonDetails (){
    const navigate = useNavigate()
    const {id} = useParams()

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        try {
            logic.retrievePokemonById(id)
                .then(setPokemon)
        } catch (error) {
            alert(error)
        }
    })

    return <>
        <div className='flex'>
            <button 
                onClick={() => navigate(`/`)}
                className='bg-[transparent] w-fit h-fit rounded-full p-0 absolute top-0 left-0 m-5
                hover:border-0 hover:shadow-md'
            >
                <img 
                    src='..\..\public\icons\turn-back_12410927.png' 
                    alt='Return'
                    className='w-10'/>
            </button>

            {!!pokemon && <PokemonCardDetails pokemon={ pokemon }/>}
        </div>
    </>
}

export default PokemonDetails