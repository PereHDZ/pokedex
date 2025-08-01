import mongoose from 'mongoose'
import pokemon from 'pokemon'
import path from 'path'

import { Pokemon } from '../../models'

const allNames = pokemon.all()

const SPRITE_DIR = 'sprites/national'

const allPokemon = allNames.map((name, index) => {
    const id = (index + 1).toString().padStart(4, '0')
    const spritePath = path.join(SPRITE_DIR, `Sprite_${id}.png`)

    return {
        id,
        name,
        spritePath
    }
})

mongoose.connect('mongodb://localhost:27017/pokedex')
    .then(() => Pokemon.deleteMany())
    .then(() => Pokemon.insertMany(allPokemon))
    .then(() => console.log(`Inserted ${allPokemon.length} pókemon.`))
    .then(() => mongoose.disconnect())
    .catch(console.error)