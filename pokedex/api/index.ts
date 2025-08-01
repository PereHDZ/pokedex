import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import logic from './logic'

dotenv.config()

const { MONGODB_URL, PORT } = process.env

console.log(MONGODB_URL)

mongoose.connect(MONGODB_URL)
    .then(() => {
        const api = express()

        const jsonbodyparser = express.json()

        api.use(cors())
        api.use(express.json())

        api.get('/pokemon/allIds', async (req, res) => {
            console.log('GET /pokemon/allIds called')
            try {
                const allBaseIds = await logic.retrieveAllBaseIds()
                res.json(allBaseIds)
            } catch (error: any) {
                console.error('Error ocurred:', error.message)
                res.status(500).json({ error: error.message })
            }
        })

        api.get('/pokemon/:id', async (req, res) => {
            const { id } = req.params

            try {
                const pokemon = await logic.retrievePokemonById(id)
                res.json(pokemon)
            } catch (error: any) {
                console.error('Error ocurred: ', error.message)
                res.status(500).json({ error: error.message })
            }
        })
        

        api.listen(PORT, () => {
            console.log(`API listening on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err.message)
    })