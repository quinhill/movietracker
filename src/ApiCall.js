import { apiKey } from './apiKey';
import { 
  recentMovies, 
  cleanFavorite, 
  addFavoriteKey 
} from './cleaner';

export const fetchNowPlaying = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const rawData = await response.json();
    const fullNowPlaying = rawData.results;
    const nowPlaying = recentMovies(fullNowPlaying);
    return nowPlaying;
  } 
  catch(error) {
    return error
  }
};

export const addNewUser = async (newUserInfo) => {
  const url = 'http://localhost:3000/api/users/new';
  const optionsObj = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUserInfo)
  }
  try {
    const enterAccount = await fetch(url, optionsObj);
    const response = await enterAccount.json();
    return response;
  }
  catch(error) {
    return error
  }
};

export const checkForUser = async (user) => {
  const url = 'http://localhost:3000/api/users';
  user.email = user.email.toLowerCase();
  const optionsObj = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  }
  try {
    const response = await fetch(url, optionsObj);
    const userData = await response.json();
    return userData.data
  }
  catch(error) {
    return error.error
  }
};

export const postFavorite = async (movie, userId) => {
  const favoriteMovie = cleanFavorite(movie, userId)
  const url = 'http://localhost:3000/api/users/favorites/new';
  const optionsObj = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(favoriteMovie)
  }
  const response = await fetch(url, optionsObj)
  const result = await response.json();
  console.log(result)
  return result;
};

export const removeFavorite = async (userId, movieId) => {
  const url = `http://localhost:3000/api/users/${userId}/favorites/${movieId}`;
  const optionsObj = {
    method: 'DELETE',
    headers: { "Content-Type": "application/json" },
  }
  const response = await fetch(url, optionsObj);
  const result = await response.json();
  return result;
}

export const fetchFavorites = async (userId) => {
  const url = `http://localhost:3000/api/users/${userId}/favorites`;
  const response = await fetch(url);
  const result = await response.json();
  return addFavoriteKey(result.data);
}