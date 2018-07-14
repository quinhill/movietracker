export const recentMovies = (nowPlaying) => {
  return nowPlaying.map(movie => {
    return {
      title: movie.title,
      overview: movie.overview,
      poster: movie.poster_path,
      ratings: movie.vote_average,
      id: movie.id,
      releaseDate: movie.release_date,
      favorite: false
    };
  });
};

export const makeFavoriteMovie = (movie, userId) => {
  const { title, overview, poster, ratings, id, releaseDate } = movie;
  return { 
    movie_id: id, 
    user_id: userId, 
    title, 
    poster_path: poster, 
    release_date: releaseDate,
    overview,
    vote_average: ratings,
  }
}

export const addFavoriteKey = (movies) => {
  return movies.map(movie => {
    return {...movie, favorite: true}
  })
}

export const checkForFavorites = (nowPlaying, favorites = []) => {
  const newNowPlaying = nowPlaying.map(movie => {
    const foundMovie = favorites.find(favorite => favorite.movie_id == movie.id)
    if(foundMovie) {
      return {...movie, favorite: true}
    }
      return movie
  })
  return newNowPlaying;
}

export const toggleFavorite = (nowPlaying, id) => {
  return nowPlaying.map(movie => {
    if(movie.id === id) {
      return {...movie, favorite: !movie.favorite}
    }
    return movie
  })
}

export const updateFavorites = (nowPlaying) => {
  return nowPlaying.filter(movie => movie.favorite)
}