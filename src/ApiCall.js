import { apiKey } from './apiKey';
import recentMovies from './cleaner';

export const fetchNowPlaying = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
  const response = await fetch(url)
  const rawData = await response.json()
  const fullNowPlaying = rawData.results
  const nowPlaying = recentMovies(fullNowPlaying)
  return nowPlaying
}

export const postNewAccount = async ({userName, password}) => {
  const url = 'localhost:3000/api/users/new'
  const newUser = {
    userName,
    password
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newUser),
  })
  .then(response => response.json())
  .then(userObj => console.log(userObj))
  .catch(error => console.log(error))
  
}