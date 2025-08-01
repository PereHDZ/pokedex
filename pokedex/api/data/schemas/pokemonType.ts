import mongoose from 'mongoose'

const { Schema } = mongoose

const pokemonType = new Schema({
    name: {
        type: String,
        required: true
    },
    
    smallIconPath: {
        type: String,
        required: true
    },

    fullIconPath: {
        type: String,
        required: true
    }
})

export default pokemonType