import React from "react"
import GenGrid from "./GenGrid"

function NationalGrid({ allBaseIds }){
    const gens = [
        newGen('I', 1, 151, '#d87d7d'),
        // newGen('II', 152, 251, '#f2d367'),
        // newGen('III', 252, 386, '#009551'),
        // newGen('IV', 387, 493, '#72a2ce'),
        // newGen('V', 494, 649, '#a2aab3'),
        // newGen('VI', 650, 721, '#e7bde2'),
        // newGen('VII', 722, 809, '#e6b065'),
        // newGen('VIII', 810, 905, '#b588d6'),
        // newGen('IX', 906, 1025, '#7c0d0d')
    ]

    function newGen (name, start, end, color){
        return {name, start, end, color}  
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

export default NationalGrid