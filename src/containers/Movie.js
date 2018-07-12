import React from 'react'
import './movie.css'

const Movie = (nowPlaying) => {
  
  const {title, overview, poster, ratings} = nowPlaying

  return (
    <div className='movie'>
      <div className='title-ratings-div'>
        <h1>{title}</h1>
        <h4>{ratings}</h4>
      </div>
      <div className="poster-div" >
        <img className='poster' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster}`} />
      </div>
      <div className="overview">
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Movie