import React, { useState, useEffect } from 'react'
import logic from '../logic'

function TypingDiv({ typingNames }) {
  const [typing, setTyping] = useState([])

  useEffect(() => {
    const fetchTypes = async () => {
      const newTyping = [];

      for (const typeName of typingNames) {
        try {
          const data = await logic.retrievePokemonTypeByName(typeName);
          console.log('Data received:', data);
          newTyping.push(data);
        } catch (err) {
          console.error('Error fetching type:', err);
        }
      }

      console.log('Final newTyping:', newTyping); 
      setTyping(newTyping);
    };

    fetchTypes(); 
  }, [typingNames]); 
  console.log(`Typing: ${typing}`);

  return (
    (!!typing.length) && <div className='flex justify-end'>
      {typing.map(pokemonType => {
        return <img 
                  key={pokemonType.name} 
                  src={`${pokemonType.smallIconPath}`} 
                  alt={`${pokemonType.name}`} 
                  className='h-[25px]'
                />
      })}
    </div>
  );
}

export default TypingDiv;