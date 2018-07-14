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
    favorites.forEach(favorite => {
      if (movie.id === favorite.movie_id) {
        movie.favorite = !movie.favorite
      } else {
        movie.favorite = false
      }
    })
    return movie;
  })
  return newNowPlaying;
}