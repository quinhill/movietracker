export const addNowPlaying = (nowPlaying) => ({
  type: 'ADD_NOW_PLAYING',
  nowPlaying
})

export const createAccount = (userName, password) => ({
  type: 'CREATE_ACCOUNT',
  userName,
  password
})

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
})