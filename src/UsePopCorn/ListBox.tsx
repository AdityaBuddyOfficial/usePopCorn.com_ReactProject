import React, { useState } from 'react'
import MovieList from './MovieList';

const Box = ({children}:any) => {
    
      const [isOpen, setIsOpen] = useState(true);
    
  return (
    <div  className="box">
      <div>
          <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "--" : "+"}

          
          </button>
          {isOpen &&
            children
          }
       
        
        </div>
       
        
    </div>
  )
}

export default Box
