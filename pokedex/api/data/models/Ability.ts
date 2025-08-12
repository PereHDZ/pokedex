import mongoose from 'mongoose'

import { AbilityType } from '../types'
import { ability } from '../schemas'

const { model } = mongoose

const Ability = model<AbilityType>('Ability', ability)

export default Ability