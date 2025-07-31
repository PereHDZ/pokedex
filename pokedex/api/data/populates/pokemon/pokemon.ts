import mongoose from 'mongoose'
import pokemon from 'pokemon'
import { Pokemon } from '../../models'

const allNames = pokemon.all()
const nameDocs = allNames.map(name => ({ name }))

mongoose.connect('mongodb://localhost:27017/pokedex')
    .then(() => Pokemon.deleteMany())
    .then(() => Pokemon.insertMany(nameDocs))
    .then(() => console.log(`Inserted ${nameDocs.length} pókemon names`))
    .then(() => mongoose.disconnect())
    .catch(console.error)