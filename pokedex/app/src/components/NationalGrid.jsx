import React from "react"
import GenGrid from "./GenGrid"

function NationalGrid({ allBaseIds }){
    const gens = [
        newGen('I', 1, 151, '#d87d7d')
    ]

    function newGen (name, start, end, color){
        return {name, start, end, color}  
    }

    return (
        <div className = "flex items-stretch">
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