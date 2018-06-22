/* Login Form */
const initLoginFormState = {
    user_id: '',
    password: "",
    user_id_input_danger: false,
    password_input_danger: false,
    user_id_and_password_match: false,
    loginOverLimit: false
};

export function loginForm(state = initLoginFormState, action) {
  switch (action.type) {
    case '@LOGIN_FORM/INPUT_USERID':
      return {
        ...state,
        user_id: action.user_id
      };
    case '@LOGIN_FORM/INPUT_PASSWORD':
      return {
        ...state,
        password: action.password
      };
    case '@LOGIN_FORM/INPUT_DANGER_USERID':
      return {
        ...state,
        user_id_input_danger: action.danger
      };
    case '@LOGIN_FORM/INPUT_DANGER_PASSWORD':
      return {
        ...state,
        password_input_danger: action.danger
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user_id_and_password_match: action.match
      };
    case 'LOGIN_OVER_LIMIT':
      return {
        ...state,
        loginOverLimit: action.overLimit
      };
    default:
      return state;
  }
}

/* Register Form */
const initRegisterFormState = {
  user_id: '',
  password: "",
  name: "",
  user_id_input_danger: false,
  password_input_danger: false,
  name_input_danger: false,
  user_id_conflict: false,
  name_conflict: false,
  user_id_and_password_match: true,
  loginOverLimit: falseu,
  user: [
    {
      name: ""
    }
  ]
};

export function registerForm(state = initRegisterFormState, action) {
  switch (action.type) {
    case '@REGISTER_FORM/INPUT_USERID':
      return {
        ...state,
        user_id: action.user_id
      };
    case '@REGISTER_FORM/INPUT_PASSWORD':
      return {
        ...state,
        password: action.password
      };
    case '@REGISTER_FORM/INPUT_NAME':
      return {
        ...state,
        name: action.name
      };
    case '@REGISTER_FORM/INPUT_DANGER_USERID':
      return {
        ...state,
        user_id_input_danger: action.danger
      };
    case '@REGISTER_FORM/INPUT_DANGER_PASSWORD':
      return {
        ...state,
        password_input_danger: action.danger
      };
    case '@REGISTER_FORM/INPUT_DANGER_NAME':
      return {
        ...state,
        name_input_danger: action.danger
      };
    case '@REGISTER_FORM/RESET':
      return {
        ...initRegisterFormState,
        user: state.user
      };
    case '@REGISTER_FORM/RESET_USER':
      return {
        ...state,
        user: [{}]
      };
    case '@REGISTER_FORM/INPUT_CONFLICT_USERID':
      return {
        ...state,
        user_id_conflict: action.conflict
      };
    case '@REGISTER_FORM/INPUT_CONFLICT_NAME':
      return {
        ...state,
        name_conflict: action.conflict
      };
    case '@REGISTER_FORM/END_CREATE_USER':
      return {
        ...state,
        user: action.user
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user_id_and_password_match: action.match
      };
    case 'LOGIN_OVER_LIMIT':
      return {
        ...state,
        loginOverLimit: action.overLimit
      };
    default:
      return state;
  }
}