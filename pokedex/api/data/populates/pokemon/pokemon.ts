import mongoose from 'mongoose'
import pokemon from 'pokemon'
import path from 'path'
import fetch from 'node-fetch'

import { Pokemon } from '../../models'

const allNames = pokemon.all()
const SPRITE_DIR = 'sprites/national'

function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s/g, '-') 
    .replace(/\./g, '')  
    .replace(/♀/g, 'f')
    .replace(/♂/g, 'm')
}

type PokemonAPIResponse = {
  types: { type: { name: string } }[]
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

async function fetchType(name: string): Promise<string[]> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${normalizeName(name)}`)
  if (!response.ok) throw new Error(`Failed to fetch ${name}`)

  const data = await response.json() as PokemonAPIResponse
  return data.types.map(t => capitalize(t.type.name))
}

(async () => {
  const allPokemon = await Promise.all(
    allNames.map(async (name, index) => {
      const id = (index + 1).toString().padStart(4, '0')
      const spritePath = path.join(SPRITE_DIR, `Sprite_${id}.png`)

      let typing: string[]
      try {
        typing = await fetchType(name)
      } catch (err) {
        console.error(`Error fetching type for ${name}:`, err)
        typing = []
      }

      return {
        id,
        name,
        spritePath,
        typing,
      }
    })
  )

  await mongoose.connect('mongodb://localhost:27017/pokedex')
  await Pokemon.deleteMany()
  await Pokemon.insertMany(allPokemon)
  const noTyping = allPokemon.filter(p => p.typing.length === 0)

  if (noTyping.length) {
    console.warn(`⚠️ Missing typing for ${noTyping.length} Pokémon:`)
    console.log(noTyping.map(p => p.id).join(', '))
  }
  await mongoose.disconnect()
})()
