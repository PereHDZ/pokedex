import React from "react"
import GenGrid from "../components/GenGrid"

function Home({ allBaseIds }){
    const gens = [
        newGen('I', 1, 151, '#d87d7d', true),
        newGen('II', 152, 251, '#f2d367', true),
        newGen('III', 252, 386, '#009551', true),
        newGen('IV', 387, 493, '#72a2ce', true),
        newGen('V', 494, 649, '#a2aab3', true),
        newGen('VI', 650, 721, '#e7bde2', true),
        newGen('VII', 722, 809, '#e6b065', true),
        newGen('VIII', 810, 905, '#b588d6', true),
        newGen('IX', 906, 1025, '#7c0d0d', false)
    ]

    function newGen (name, start, end, color, blackFont){
        return {name, start, end, color, blackFont}  
    }

    return (
        <div className = "flex items-stretch flex-col">
            {gens.map(gen => {
                return (<GenGrid
                    gen={gen}
                    baseIds={allBaseIds}
                    key={gen.name}
                />)
            })}
        </div>
    )
}

export default Home