import React, { useEffect, useState } from 'react'
import logic from '../logic'

function PokemonCardDetails({ pokemon }) {
  const [pokemonTypes, setPokemonTypes] = useState([])

  const typeColors = [
    newTypeColors('Grass', '#82c274', '#3fa129'),
    newTypeColors('Fire', '#ef7374', '#e62829'),
    newTypeColors('Water', '#74acf5', '#2980ef'),
    newTypeColors('Bug', '#b8c26a', '#91a119'),
    newTypeColors('Normal', '#c1c2c1', '#9fa19f'),
    newTypeColors('Poison', '#b884dd', '#9141cb'),
    newTypeColors('Electric', '#fcd659', '#fac000'),
    newTypeColors('Ground', '#b88e6f', '#915121'),
    newTypeColors('Fairy', '#f5a2f5', '#ef70ef'),
    newTypeColors('Fighting', '#ffac59', '#ff8000'),
    newTypeColors('Rock', '#cbc7ad', '#afa981'),
    newTypeColors('Ghost', '#a284a2', '#704170'),
    newTypeColors('Psychic', '#f584a8', '#ef4179'),
    newTypeColors('Ice', '#81dff7', '#3dcef3'),
    newTypeColors('Dragon', '#8d98ec', '#5060e1'),
    newTypeColors('Dark', '#998b8c', '#624d4e'),
    newTypeColors('Steel', '#98c2d1', '#60a1b8'),
    newTypeColors('Flying', '#add2f5', '#81b9ef')
  ]

  const matchingColor = typeColors.find(color => color.name === pokemon.typing[0])

  function newTypeColors(name, baseColor, accentColor) {
    return { name, baseColor, accentColor }
  }

  useEffect(() => {
    const fetchTypes = async () => {
      const newTyping = []

      for (const type of pokemon.typing) {
        try {
          const data = await logic.retrievePokemonTypeByName(type)
          newTyping.push(data)
        } catch (err) {
          console.error('Error fetching type:', err)
        }
      }

      setPokemonTypes(newTyping)
    }

    fetchTypes()
  }, [])

  return (
    <div 
        className={`flex flex-col items-center justify-center h-64 border-4 p-2 rounded-md`}
        style={{ 
            backgroundColor: matchingColor ? matchingColor.baseColor : undefined,
            borderColor: matchingColor ? matchingColor.accentColor : undefined 
        }}
    >

      <img
        src={`../${pokemon.spritePath}`}
        alt={`${pokemon.name}`}
        className="border bg-white rounded-md w-200" 
      />

      <div className="flex ustify-between w-full pb-2">
        <h2 className="flex-1 border mt-2 bg-white rounded-md mr-2">#{pokemon.id}</h2>
        <h2 className="flex-1 border mt-2 bg-white rounded-md">{pokemon.name}</h2>
      </div>

      <div className='flex bg-white p-1 rounded-md'>
        {pokemonTypes.map((pokemonType) => (
          <img
            key={pokemonType.name}
            src={`../${pokemonType.fullIconPath}`}
            alt={pokemonType.name}
            className='w-20'
          />
        ))}
      </div>
    </div>
  )
}

export default PokemonCardDetails