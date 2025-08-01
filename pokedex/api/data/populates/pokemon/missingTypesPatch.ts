import mongoose from 'mongoose'
import { Pokemon } from '../../models'

async function updatePokemonTyping() {
  await mongoose.connect('mongodb://localhost:27017/pokedex')

  const updates = [
    { id: '0029', typing: ['Poison'] },
    { id: '0032', typing: ['Poison'] },
    { id: '0083', typing: ['Normal', 'Flying'] },
    { id: '0386', typing: ['Psychic'] },
    { id: '0413', typing: ['Bug', 'Grass'] },
    { id: '0487', typing: ['Ghost', 'Dragon'] },
    { id: '0492', typing: ['Grass'] },
    { id: '0550', typing: ['Water'] },
    { id: '0555', typing: ['Fire'] },
    { id: '0641', typing: ['Flying'] },
    { id: '0642', typing: ['Electric', 'Flying'] },
    { id: '0645', typing: ['Ground', 'Flying'] },
    { id: '0647', typing: ['Water', 'Fighting'] },
    { id: '0648', typing: ['Normal', 'Psychic'] },
    { id: '0669', typing: ['Fairy'] },
    { id: '0678', typing: ['Psychic'] },
    { id: '0681', typing: ['Steel', 'Ghost'] },
    { id: '0710', typing: ['Grass', 'Ghost'] },
    { id: '0711', typing: ['Grass', 'Ghost'] },
    { id: '0718', typing: ['Ground', 'Dragon'] },
    { id: '0741', typing: ['Fire', 'Flying'] },
    { id: '0745', typing: ['Rock'] },
    { id: '0746', typing: ['Water'] },
    { id: '0772', typing: ['Normal'] },
    { id: '0774', typing: ['Rock', 'Flying'] },
    { id: '0778', typing: ['Ghost', 'Fairy'] },
    { id: '0849', typing: ['Electric', 'Poison'] },
    { id: '0865', typing: ['Fighting'] },
    { id: '0875', typing: ['Ice'] },
    { id: '0876', typing: ['Psychic', 'Normal'] },
    { id: '0877', typing: ['Electric', 'Dark'] },
    { id: '0892', typing: ['Fighting', 'Dark'] },
    { id: '0902', typing: ['Water', 'Ghost'] },
    { id: '0905', typing: ['Fairy', 'Flying'] },
    { id: '0916', typing: ['Normal'] },
    { id: '0925', typing: ['Normal'] },
    { id: '0931', typing: ['Normal', 'Flying'] },
    { id: '0964', typing: ['Water'] },
    { id: '0978', typing: ['Dragon', 'Water'] },
    { id: '0982', typing: ['Normal'] }
  ]

  for (const { id, typing } of updates) {
    const result = await Pokemon.updateOne(
      { id },
      { $set: { typing } }
    )

    if (result.modifiedCount > 0) {
      console.log(`✅ Updated typing for Pokémon with ID ${id}`)
    } else {
      console.warn(`⚠️ Could not update Pokémon with ID ${id} (not found?)`)
    }
  }

  await mongoose.disconnect()
}

updatePokemonTyping()
  .then(() => console.log('All updates completed successfully.'))
  .catch(err => console.error('Error during updates:', err))
