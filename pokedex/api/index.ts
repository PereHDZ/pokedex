import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

dotenv.config()

const { MONGODB_URL, PORT } = process.env

console.log(MONGODB_URL)

mongoose.connect(MONGODB_URL)
    .then(() => {
        const api = express()

        const jsonbodyparser = express.json()

        api.use(cors())
        api.use(express.json())

        api.listen(PORT, () => {
            console.log(`API listening on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err.message)
    })