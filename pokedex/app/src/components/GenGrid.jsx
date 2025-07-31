import React from "react"

function GenGrid({ gen, baseIds }) {
    const genIds = baseIds.slice(gen.start - 1, gen.end)
    return (
        <div className="my-4 flex items-stretch">
            <div 
                className="flex items-center justify-center px-4 h-full mr-2 border rounded-md" 
                style={{ backgroundColor: gen.color }}
            >
                <h2 className="text-xl font-semibold text-white rotate-[-90deg] origin-center">
                    {`Gen ${gen.name}`}
                </h2>
            </div>

            <div
                className="grid gap-2 grid-cols-15"
                style={{ gridTemplateColumns: `repeat(15, 1fr)` }}
            >
                {genIds.map((id, index) => (
                    <div
                        key={index}
                        className="p-2 border rounded-md text-center"
                    >
                        {id}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GenGrid