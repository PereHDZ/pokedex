import mongoose from 'mongoose'

import { Ability } from '../../models'

import allAbilities from '.'

mongoose.connect('mongodb://localhost:27017/pokedex')
    .then(() => Ability.deleteMany())
    .then(() => Ability.insertMany(allAbilities))
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)