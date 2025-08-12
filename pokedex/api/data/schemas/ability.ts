import mongoose from 'mongoose'

const { Schema } = mongoose

const ability = new Schema ({
    id: {
        type: Number,
        required: true,
    }, 
    
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
})

export default ability