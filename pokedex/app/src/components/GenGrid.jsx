import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

function GenGrid({ gen, baseIds }) {
    const genIds = baseIds.slice(gen.start - 1, gen.end);
    const [visibleGrid, setVisibleGrid] = useState(false); 

    const toggleGridVisibility = () => {
        setVisibleGrid((prev) => !prev);
    };

    return (
        <div className="mb-2 flex flex-col items-center w-full"> 
            <button
                className="flex items-center justify-center px-4 border mb-2 rounded-md w-full
                           hover:border-2 hover:shadow-md hover:border-black transition-all duration-200"
                style={{ backgroundColor: gen.color }}
                onClick={toggleGridVisibility}
            >
                <h2 className="text-xl font-semibold text-white origin-center">
                    {`Gen ${gen.name}`}
                </h2>
            </button>

            {visibleGrid && (
                <div
                    className={`grid gap-2 grid-cols-10 transition-all duration-300 ${gen.blackFont ? '' : 'text-white'}`}
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
            )}
        </div>
    );
}

export default GenGrid;
