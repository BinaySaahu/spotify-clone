import React from 'react'
import './SongRow.css'

function SongRow({track}) {
  return (
    <div className='songrow'>
        <img src= {track.album.images[0].url} alt="" className='songrow_album' />
        <div className="songrow_info">
            <h1>{track.name}</h1>
            <p>
                {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                {track.album.name}
            </p>
        </div>
      
    </div>
  )
}

export default SongRow
