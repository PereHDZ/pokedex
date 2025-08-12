import mongoose from 'mongoose'

const { Schema } = mongoose

const pokemonAbility = new Schema ({
    name: {
        type: String,
        required: true
    },

    isHidden: {
        type: Boolean,
        required: true
    },

    slot: {
        type: Number,
        required: true
    }
})

export default pokemonAbility