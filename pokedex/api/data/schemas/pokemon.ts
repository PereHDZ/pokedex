import mongoose, { mongo } from 'mongoose'

const { Schema } = mongoose

const pokemon = new Schema ({
    name: {
        type: String,
        required: true
    }
})

export default pokemon