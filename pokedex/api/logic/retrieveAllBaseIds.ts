import { Pokemon } from '../data/models'

async function retrieveAllBaseIds(): Promise<string[]> {
  try {
    const baseForms = await Pokemon.find({
      id: { $regex: /^\d+$/ },
    })
      .lean()
      .exec()

    return baseForms.map(({ id }) => id)
    
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export default retrieveAllBaseIds