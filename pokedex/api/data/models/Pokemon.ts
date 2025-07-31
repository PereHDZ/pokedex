import mongoose from 'mongoose'

import { PokemonType } from '../types'
import { pokemon } from '../schemas'

const { model } = mongoose

const Pokemon = model<PokemonType>('Pokemon', pokemon)

export default Pokemon