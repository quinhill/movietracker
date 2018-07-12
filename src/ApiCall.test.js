import * as ApiCall from './ApiCall';
import { apiKey } from './apiKey';

describe('fetchNowPlaying', () => {

  it('should call fetch with correct params', async () => {
    const mockArray = {results: [{}, {}]}
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
      { json: () => Promise.resolve(mockArray)
  }))

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
    await ApiCall.fetchNowPlaying(url)

    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should return an array of movie Objects')
})