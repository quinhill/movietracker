import { apiKey } from './apiKey';
import recentMovies from './cleaner';

export const fetchNowPlaying = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
  const response = await fetch(url);
  const rawData = await response.json();
  const fullNowPlaying = rawData.results;
  const nowPlaying = recentMovies(fullNowPlaying);
  return nowPlaying;
};


export const addNewUser = async (newUserInfo) => {
  const url = 'http://localhost:3000/api/users/new';
  const enterAccount = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUserInfo)
  });

  const response = await enterAccount.json();
  console.log(response);
};