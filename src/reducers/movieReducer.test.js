import { movieReducer } from './movieReducer';
import * as actions from '../actions';

describe('movieReducer', () => {

  it('should have an initial state of an empty array', () => {
    const expected = [];

    const result = movieReducer(undefined, [])

    expect(result).toEqual(expected)
  })

  it('should return state and a nowPlaying array', () => {
    const nowPlaying = [{}, {}, {}];

    const expected = nowPlaying;

    const result = movieReducer(undefined, actions.addNowPlaying(nowPlaying))

    expect(result).toEqual(expected)
  })

  it.skip('should return state and toggle the favorites value of a movie', () => {
    const nowPlaying = [{favorite: false}, {favorite: false}, {favorite: false}];

    const expected = nowPlaying;

    const result = movieReducer(undefined, actions.addNowPlaying(nowPlaying))

    expect(result).toEqual(expected)
  })
})