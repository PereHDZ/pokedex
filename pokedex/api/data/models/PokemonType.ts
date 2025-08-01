import mongoose from 'mongoose'

import { PokemonTypeType } from '../types'
import { pokemonType } from '../schemas'

const { model } = mongoose

const PokemonType = model<PokemonTypeType>('PokemonType', pokemonType)

export default PokemonType