import React from 'react'
import './NameSection.css'

const NameSection = () => {
  return (
    <div id="NameSection" className='flex flex-h'>
        
        <h2>Paul Michaut</h2>

        <div className='flex logosName'>
          <img className="logo" src="images/logos/Accor.png" alt="AccorHotel" />
          <img className="logo" src="images/logos/artefact-white.png" alt="Artefact" style={{transform: "scale(0.85)"}} />
          <img className="logo" src="images/logos/laredoute.png" alt="LaRedoute" />
          <img className="logo" src="images/logos/tyrolienne.png" alt="LaTyrolienne" />
        </div>

        <div className='border' />

    </div>
  )
}

export default NameSection