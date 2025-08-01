import { PokemonType } from '../data/models'
import { PokemonTypeType } from '../data/types'

async function retrievePokemonTypeByName(name:string) : Promise<PokemonTypeType> {
    try {
        const pokemon = await PokemonType.findOne({ name }).lean().exec()

        if (!pokemon) {
            throw new Error(`Pokemon with id ${name} not found`)
        }

        return pokemon as PokemonTypeType
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default retrievePokemonTypeByName