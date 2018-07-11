import React from 'react'
import Movie from '../containers/Movie'
import { connect } from 'react-redux';

export const MovieList = (props) => {

  const nowPlaying = props.nowPlaying.map(movie => {
    return <Movie {...movie} />
  })

  return (
    <div>
      {nowPlaying}
    </div>
  )
}

export const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying
})

export default connect(mapStateToProps, null)(MovieList)