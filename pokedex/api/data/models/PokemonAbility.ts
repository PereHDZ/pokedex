import mongoose from 'mongoose'

import { PokemonAbilityType } from '../types'
import { pokemonAbility } from '../schemas'

const { model } = mongoose

const PokemonAbility = model<PokemonAbilityType>('PokemonAbility', pokemonAbility)

export default PokemonAbility