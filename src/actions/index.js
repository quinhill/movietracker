export const addMovie = ({id, title, rating, overview, poster}) => ({
  type: 'ADD_MOVIE',
  id,
  title,
  overview,
  rating,
  poster
})