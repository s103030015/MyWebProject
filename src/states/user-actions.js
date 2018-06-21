/* User */

export function userLogin(user_id, name) {
  return {type: '@USER/LOGIN', user_id, name};
}
