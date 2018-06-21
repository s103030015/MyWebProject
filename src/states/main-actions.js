/* Main */
export function toggleNavbar() {
  return {type: '@MAIN/TOGGLE_NAVBAR'};
}

export function toggleSignIn() {
  return {type: '@MAIN/TOGGLE_SIGNIN'};
}

export function changeLoginState(loginState) {
  return {type: '@MAIN/CHANGE_LOGIN_STATE', loginState};
}

export function logout() {
  return (dispatch, getState) => {
    Promise.resolve([1, 2, 3]).then(() => {
      dispatch(changeLoginState("guest"));
      return dispatch(resetUser());
    }).then(() => {
      
    });
  };
}

export function toggleDelete(id) {
  return {type: '@MAIN/TOGGLE_DELETE', id};
}

export function toggleConfirm() {
  return {type: '@MAIN/TOGGLE_CONFIRM'};
}
