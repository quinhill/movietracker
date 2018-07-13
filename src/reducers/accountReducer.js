export const accountReducer = (state = {}, action) => {
  switch(action.type) {
    case 'CREATE_ACCOUNT':
      return action.newUser
    case 'LOG_IN':
      return action.user
    case 'LOG_OUT':
      return { message: action.message }
    case 'PROMPT_CREATE':
      return { message: action.message }
    default:
      return state
  } 
}