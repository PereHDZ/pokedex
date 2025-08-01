import mongoose from 'mongoose'
import path from 'path'

import { PokemonType } from '../../models'

const SMALL_ICON_DIR ='Small_Icons'
const FULL_ICON_DIR = 'Full_Icons'

const allTypes = [
    { name: 'Rock' },
    { name: 'Water' },
    { name: 'Electric' },
    { name: 'Grass' },
    { name: 'Poison' },
    { name: 'Psychic' },
    { name: 'Fire' },
    { name: 'Ground' },
    { name: 'Flying' },
    { name: 'Bug' },
    { name: 'Normal' },
    { name: 'Ghost' },
    { name: 'Fighting' },
    { name: 'Steel' },
    { name: 'Ice' },
    { name: 'Dragon' },
    { name: 'Dark' },
    { name: 'Fairy' },
    
].map(type => ({
    ...type,
    smallIconPath: path.join(SMALL_ICON_DIR, `${type.name}_Small_Icon.png`),
    fullIconPath: path.join(FULL_ICON_DIR, `${type.name}_Full_Icon.png`)
}));

mongoose.connect('mongodb://localhost:27017/pokedex')
    .then(() => PokemonType.deleteMany())
    .then(() => PokemonType.insertMany(allTypes))
    .then(() => console.log(`Inserted ${allTypes.length} Types.`))
    .then(() => mongoose.disconnect())
    .catch(console.error)