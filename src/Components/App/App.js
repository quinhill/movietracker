import React, { Component } from 'react';
import './App.css';
import {fetchNowPlaying} from '../../ApiCall'
import MovieContainer from '../../Components/MovieContainer/MovieContainer';
import { connect } from 'react-redux';


export class App extends Component {
  constructor() {
    super()
    this.state = {
      nowPlaying: []
    }
    
    
  }

  componentDidMount = async () => {
    const nowPlaying = await fetchNowPlaying()
    this.setState({nowPlaying})
  }

  render() {
    return (
      <div className="App">
        <MovieContainer 
          nowPlaying={this.state.nowPlaying}
        />
      </div>
    );
  }
}

// export const mapStateToProps = (state) => ({
//   movies: state.movies
// })

// export const mapDispatchToProps = (dispatch) => ({
//   handleSubmit: (text, id) => dispatch(addTodo(text, id))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)

