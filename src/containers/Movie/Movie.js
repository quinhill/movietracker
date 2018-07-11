import React from 'react'
import { connect } from 'react-redux';

export const Movie = (nowPlaying) => {
  
  const {title, overview, poster, ratings} = nowPlaying

  return (
    <div className='movie'>
      <h1>{title}</h1>
      <p>{overview}</p>
      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster}`} />
      <h4>{ratings}</h4>
    </div>
  )
}

const mapStatetoProps = (state) => ({
  movies: state.movies
})

export default connect(mapStatetoProps, null)(Movie);