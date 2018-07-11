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

}