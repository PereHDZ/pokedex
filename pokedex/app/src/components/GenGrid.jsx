import React from "react"
import PokemonCard from "./PokemonCard"

function GenGrid({ gen, baseIds }) {
    const genIds = baseIds.slice(gen.start - 1, gen.end)
    
    return (
        <div className="my-4 flex items-stretch">
            <div 
                className="flex items-center justify-center px-4 mr-2 border rounded-md w-20" 
                style={{ backgroundColor: gen.color }}
            >
                <h2 className="text-xl font-semibold text-white origin-center">
                    {`Gen ${gen.name}`}
                </h2>
            </div>

            <div
                className="grid gap-2 grid-cols-10"
                style={{ gridTemplateColumns: `repeat(10, 1fr)` }}
            >
                {genIds.map((id, index) => (
                    <PokemonCard 
                        key={index}
                        id={id}
                        color={gen.color}
                    />
                ))}
            </div>
        </div>
    )
}

export default GenGrid