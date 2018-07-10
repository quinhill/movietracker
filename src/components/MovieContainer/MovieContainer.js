import React from 'react'
import Movie from '../../containers/Movie/Movie'

const MovieContainer = ({nowPlaying}) => {

  const mapMovies = nowPlaying.map(movie => {
    return <Movie {...movie} />
  })
  return(
    <div className='movie-container'>
      {mapMovies}
    </div>
  )
}

export default MovieContainer