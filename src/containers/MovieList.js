import React from 'react'
import Movie from '../containers/Movie'
import { connect } from 'react-redux';
import './movie-list.css'
import PropTypes from 'prop-types';

export const MovieList = (props) => {

  const nowPlaying = props.nowPlaying.map(movie => {
    return <Movie {...movie} />
  })

  return (
    <div className="movie-list" >
      {nowPlaying}
    </div>
  )
}

MovieList.Proptypes = {
  nowPlaying: PropTypes.arrayOf(PropTypes.object)
}

export const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying
})

export default connect(mapStateToProps, null)(MovieList)