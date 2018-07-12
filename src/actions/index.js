export const addNowPlaying = (nowPlaying) => ({
  type: 'ADD_NOW_PLAYING',
  nowPlaying
})

export const createAccount = ({ name, password, email }) => ({
  type: 'CREATE_ACCOUNT',
  name,
  password,
  email
})

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
})