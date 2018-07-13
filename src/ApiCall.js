import { apiKey } from './apiKey';
import recentMovies from './cleaner';

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
    console.log(error)
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
    return error.message
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
    console.log(error)
  }
};

export const postFavorite = async () => {
  
};
