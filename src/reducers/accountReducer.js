export const accountReducer = (state = {}, action) => {
  switch(action.type) {
    case 'CREATE_ACCOUNT':
      return action.newUser
    default:
      return state
  } 
}