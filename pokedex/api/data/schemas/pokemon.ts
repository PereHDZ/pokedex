import mongoose from 'mongoose'

const { Schema } = mongoose

const pokemon = new Schema ({
    id: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    spritePath: {
        type: String,
        required: true
    },

    typing: {
        type: [String],
        required: true
    }
})

export default pokemon