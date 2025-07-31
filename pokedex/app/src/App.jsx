import React, { useEffect, useState } from 'react'

import logic from './logic'

import './App.css'
import NationalGrid from './components/NationalGrid'

function App() {
  const [allPokemonIds, setAllPokemonIds] = useState([])

  const fetchAllBaseIds = async () => {
    try {
      const ids = await logic.retrieveAllBaseIds()
      setAllPokemonIds(ids)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchAllBaseIds()
  }, [])

  console.log(allPokemonIds)

  return (
    <>
      {!!allPokemonIds.length && <NationalGrid allBaseIds={allPokemonIds} />}
    </>
  )
}

export default App
