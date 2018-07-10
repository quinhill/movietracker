import React from 'react'

const Movie = (nowPlaying) => {
  
  const {title, overview, poster, ratings} = nowPlaying
  console.log(poster)

  return (
    <div className='movie'>
      <h1>{title}</h1>
      <p>{overview}</p>
      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster}`} />
      <h4>{ratings}</h4>
    </div>
  )
}

export default Movie