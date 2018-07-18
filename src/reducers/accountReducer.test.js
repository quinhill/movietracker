import { accountReducer } from './accountReducer';
import * as actions from '../actions';

describe('accountReducer', () => {

  it('should return an initial state', () => {
    const expected = {};

    const result = accountReducer(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return the state with a new user', () => {
    const user = {
        name: 'Michael Scott', 
        email: 'michael.scott@dundermifflin.com',
        password: 'worldsbestboss'
      }
    
    const expected = {
      name: 'Michael Scott',
      email: 'michael.scott@dundermifflin.com',
      password: 'worldsbestboss'
    }

    const result = accountReducer(undefined, actions.createAccount(user));

    expect(result).toEqual(expected);
  })

  it('should return the state with a new user', () => {
    const user = {
      name: 'Michael Scott',
      email: 'michael.scott@dundermifflin.com',
      password: 'worldsbestboss'
    }

    const expected = {
      name: 'Michael Scott',
      email: 'michael.scott@dundermifflin.com',
      password: 'worldsbestboss'
    }

    const result = accountReducer(undefined, actions.logIn(user));

    expect(result).toEqual(expected);
  })

  it('should return the state with a message', () => {

    const expected = {
      message: 'You have been logged out'
    }

    const result = accountReducer(undefined, actions.logOut());

    expect(result).toEqual(expected);
  })

  it('should return the state with a message', () => {

    const expected = {
      message: 'You must create an account to add favorites'
    }

    const result = accountReducer(undefined, actions.promptCreate());

    expect(result).toEqual(expected);
  })

  it('should return the state and add a new favorite to the users favorites array', () => {
    const favorite = {}

    const expected = {
      favorites: [favorite]
    }

    const result = accountReducer(undefined, actions.addUserFavorite(favorite));

    expect(result).toEqual(expected);
  })

  it('REMOVE USER FAVORITE return the state and remove a favorite from the users favorites array', () => {
    const state = { favorites: [{ id: 5, favorite: true }, { id: 6, favorite: true}]};
    const action = {
      type: 'REMOVE_USER_FAVORITE',
      id: 5
    }
    const expected = { ...state, favorites: [{ id: 6, favorite: true}] };
    const result = accountReducer(state, action);
    expect(result).toEqual(expected);
  })
})