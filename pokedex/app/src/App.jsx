import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import logic from './logic'
import './App.css'

import Home from './routes/Home'
import PokemonDetails from './routes/PokemonDetails'

function App() {
  const [allPokemonIds, setAllPokemonIds] = useState([])

  useEffect(() => {
    const fetchAllBaseIds = async () => {
      try {
        const ids = await logic.retrieveAllBaseIds()
        setAllPokemonIds(ids)
      } catch (error) {
        alert(error)
      }
    }

    fetchAllBaseIds()
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          !!allPokemonIds.length && <Home allBaseIds={allPokemonIds} />
        }
      />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  )
}

export default App
