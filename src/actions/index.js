export const addNowPlaying = (nowPlaying) => ({
  type: 'ADD_NOW_PLAYING',
  nowPlaying
});

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
});

export const createAccount = (newUser) => ({
  type: 'CREATE_ACCOUNT',
  newUser
});

export const logIn = (user) => ({
  type: 'LOG_IN',
  user
});

export const logOut = () => ({
  type: 'LOG_OUT',
  message: 'You have been logged out'
});

export const promptCreate = () => ({
  type: 'PROMPT_CREATE',
  message: 'You must create an account to add favorites'
});

