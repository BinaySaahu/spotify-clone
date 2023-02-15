import React from 'react'
import Player from '../components/Player'

function PlayerPage( {spotify} ) {
  return (
    <div className='playerPage'>
        <Player spotify = {spotify} />
      
    </div>
  )
}

export default PlayerPage
