import * as cleaner from './cleaner';
import * as mocks from './__mocks__/mockNowPlaying';

describe('recentMovies', () => {

  it('should take in an array of movie objects and clean each one', () => {
    const mockArray = [mocks.movie1, mocks.movie2];

    const result = cleaner.recentMovies(mockArray);

    expect(result).toEqual(mocks.expectedRecentMovies)
  })
})

describe('cleanFavorite', () => {

  it('it should return a cleaned movie object with the ID of the user', () => {
    const mockUserId = 4
    
    const result = cleaner.cleanFavorite(mocks.mockFavorite, mockUserId)

    expect(result).toEqual(mocks.expectedFavoriteMovie)
  })
})

describe('addFavoriteKey', () => {

  it('should add a key of favorite: true to each object in a movie array', () => {
    const mockArray = [mocks.expectedFavoriteMovie]

    const result = cleaner.addFavoriteKey(mockArray)

    expect(result).toEqual(mocks.expectedFavoriteKey)
  })
})

describe('cleanFavorites', () => {

  it('should clean the retrieved favorites array', () => {
    const result = cleaner.cleanFavorites(mocks.mockRetrievedFavorites);

    expect(result).toEqual(mocks.expectedFavorites)
  })
})