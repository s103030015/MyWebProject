/* User */

const initUserState = {
  current_user_id: '',
  current_name: ''
};

export function user(state = initUserState, action) {
  switch (action.type) {
    case '@USER/LOGIN':
      return {
        ...state,
        current_user_id: action.user_id,
        current_name: action.name
      };
    default:
      return state;
  }
}
