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

  it('should return state and toggle the favorites value of a movie', () => {
    const state = [{ id: 5, favorite: false}, { id: 7, favorite: false}, {favorite: false}]
    const action = {
      type: 'TOGGLE_FAVORITE',
      id: 5
    }
    const expected = [{ id: 5, favorite: true}, { id: 7, favorite: false}, {favorite: false}]

    const result = movieReducer(state, action)

    expect(result).toEqual(expected)
  })
})