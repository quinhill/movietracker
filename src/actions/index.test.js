import * as actions from './index';

describe('actions', () => {

  it('should return a type of ADD_NOW_PLAYING with a nowPlaying array', () => {
    const nowPlaying = [{}, {}, {}];

    const expected = {
      type: 'ADD_NOW_PLAYING',
      nowPlaying
    }

    const result = actions.addNowPlaying(nowPlaying);

    expect(result).toEqual(expected)
  })

  it('should return a type of TOGGLE_FAVORITE with an ID', () => {
    const id = 4;

    const expected = {
      type: 'TOGGLE_FAVORITE',
      id
    }

    const result = actions.toggleFavorite(id);

    expect(result).toEqual(expected)
  })

  it('should return a type of CREATE_ACCOUNT a newUser object', () => {
    const newUser = {
      name: 'Michael Scott',
      email: 'michael.scott@dundermifflin.com',
      password: 'worldsbestboss'
    }

    const expected = {
      type: 'CREATE_ACCOUNT',
      newUser
    }

    const result = actions.createAccount(newUser);

    expect(result).toEqual(expected)
  })

  it('should return a type of LOG_IN with a user object', () => {
    const user = {
      email: 'michael.scott@dundermifflin.com',
      password: 'worldsbestboss'
    }

    const expected = {
      type: 'LOG_IN',
      user
    }

    const result = actions.logIn(user);

    expect(result).toEqual(expected)
  })

  it('should return a type of ADD_USER_FAVORITE with a favorite object', () => {
    const favorite = {
      favorite: false,
      id: 351286,
      overview: "Several years after the demise of Jurassic World...",
      poster: "/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
      ratings: 6.6,
      releaseDate: "2018-06-06",
      title: "Jurassic World: Fallen Kingdom"
    }

    const expected = {
      type: 'ADD_USER_FAVORITE',
      favorite
    }

    const result = actions.addUserFavorite(favorite);

    expect(result).toEqual(expected)
  })

  it('should return a type of REMOVE_USER_FAVORITE with an ID', () => {
    const id = 4;

    const expected = {
      type: 'REMOVE_USER_FAVORITE',
      id
    }

    const result = actions.removeUserFavorite(id);

    expect(result).toEqual(expected)
  })

  it('should return a type of LOG_OUT with a message', () => {
    const expected = {
      type: 'LOG_OUT',
      message: 'You have been logged out'
    }

    const result = actions.logOut();

    expect(result).toEqual(expected)
  })

  it('should return a type of PROMPT_CREATE with a message', () => {
    const expected = {
      type: 'PROMPT_CREATE',
      message: 'You must create an account to add favorites'
    }

    const result = actions.promptCreate();

    expect(result).toEqual(expected)
  })

  it('should return a type of RESET_STATE with an empty user object', () => {
    const expected = {
      type: 'RESET_STATE',
      user: {}
    }

    const result = actions.resetState();

    expect(result).toEqual(expected)
  })
})