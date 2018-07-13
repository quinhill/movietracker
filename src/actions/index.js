export const addNowPlaying = (nowPlaying) => ({
  type: 'ADD_NOW_PLAYING',
  nowPlaying
})

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
})

export const createAccount = (newUser) => ({
  type: 'CREATE_ACCOUNT',
  newUser
})

export const logIn = (id) => ({
  type: 'LOG_IN',
  id
})