import {
  createUser as createUserFromApi, 
  checkUserid as checkUseridFromApi, 
  checkName as checkNameFromApi, 
  login as loginFromApi
} from 'api/login.js';

/* Login Form */
export function loginInputUserid(user_id) {
  return {type: '@LOGIN_FORM/INPUT_USERID', user_id};
}

export function loginInputPassword(password) {
  return {type: '@LOGIN_FORM/INPUT_PASSWORD', password};
}

export function loginDangerInputUserid(danger) {
  return {type: '@LOGIN_FORM/INPUT_DANGER_USERID', danger};
}

export function loginDangerInputPassword(danger) {
  return {type: '@LOGIN_FORM/INPUT_DANGER_PASSWORD', danger};
}

function loginOverLimit(overLimit) {
  return {type: 'LOGIN_OVER_LIMIT', overLimit};
}

export function loginSuccess(match) {
  return {type: 'LOGIN_SUCCESS', match};
}

/* Register Form */
export function resetUser() {
  return {type: '@REGISTER_FORM/RESET_USER'};
}

export function registerInputUserid(user_id) {
  return {type: '@REGISTER_FORM/INPUT_USERID', user_id};
}

export function registerInputPassword(password) {
  return {type: '@REGISTER_FORM/INPUT_PASSWORD', password};
}

export function registerInputName(name) {
  return {type: '@REGISTER_FORM/INPUT_NAME', name};
}

export function registerDangerInputUserid(danger) {
  return {type: '@REGISTER_FORM/INPUT_DANGER_USERID', danger};
}

export function registerDangerInputPassword(danger) {
  return {type: '@REGISTER_FORM/INPUT_DANGER_PASSWORD', danger};
}

export function registerDangerInputName(danger) {
  return {type: '@REGISTER_FORM/INPUT_DANGER_NAME', danger};
}

export function registerReset() {
  return {type: '@REGISTER_FORM/RESET'};
}

function inputConflictUserid(conflict) {
  return {type: '@REGISTER_FORM/INPUT_CONFLICT_USERID', conflict};
}

function inputConflictName(conflict) {
  return {type: '@REGISTER_FORM/INPUT_CONFLICT_NAME', conflict};
}

function endCreateUser(user) {
  return {type: '@REGISTER_FORM/END_CREATE_USER', user};
}

//register, login - main function exported
//toggleRegister = {1:registering, 0:logging in}
export function checkUseridAvailability(user_id, toggleRegister) {
  return (dispatch, getState) => {
    return checkUseridFromApi(user_id).then(user_id => {
      if (user_id && user_id.length > 0)
        return dispatch(inputConflictUserid(true));
      else
        return dispatch(inputConflictUserid(false));
      }
    ).catch(err => {
      console.error('Error checking user_id', err);

    }).then(() => {
      if (!getState().registerForm.user_id_conflict && toggleRegister){
        return checkNameFromApi(getState().registerForm.name);
      }
      if(!getState().registerForm.user_id_conflict && !toggleRegister){
        return checkNameFromApi(getState().loginForm.name);
      }

    }).then(name => {
      if(toggleRegister){
        if (name && name.length > 0)
          return dispatch(inputConflictName(true));
        else
          return dispatch(inputConflictName(false));
        }
      }

    ).then(() => {
      if (!getState().registerForm.user_id_conflict && !getState().registerForm.name_conflict && toggleRegister)
        return createUserFromApi(getState().registerForm.user_id, getState().registerForm.password, getState().registerForm.name);
      }
    ).then(user => {
      if (user && toggleRegister) {
        dispatch(endCreateUser(user));
        dispatch(toggleSignIn());
        dispatch(registerReset());
      }
    }).catch(err => {
      console.error('Error creating user', err);
    });
  };
}

export function loginCookie(user_id, password) {
  return (dispatch, getState) => {
    return loginFromApi(user_id, password).then(user => {
      if (user.length > 0) {
        dispatch(endCreateUser(user));
        dispatch(changeLoginState("logged in"));
        return true;
      }
    }).catch(err => {
      console.error('Error in cookie', err);
    }).then((a) => {
      if (a) {
        dispatch(listPosts(getState().searchText));
      }
    });
  };
}

export function login(user_id, password, toggleRegister) {
  return (dispatch, getState) => {
    return loginFromApi(user_id, password).then(user => {
      if (user.length > 0) {
        if (!user[0].overLimit) {
          dispatch(endCreateUser(user));
          dispatch(loginSuccess(true));
          dispatch(loginOverLimit(false));
          dispatch(toggleSignIn());
          dispatch(registerReset());
          dispatch(changeLoginState("logged in"));
          return true;
        } else {
          dispatch(loginSuccess(false));
          dispatch(loginOverLimit(true));
        }
      } else {
        dispatch(loginSuccess(false));
        dispatch(loginOverLimit(false));
      }
    }).catch(err => {
      console.error('Error creating post', err);
    }).then((a) => {
      if (a) {
        dispatch(listPosts(getState().searchText));
      }
    });
  };
}