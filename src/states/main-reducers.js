/* Main */

const initMainState = {
    navbarToggle: false,
    signInToggle: false,
  	confirmToggle: false,
  	deleteToggle: {},
  	loginState: "guest"
};

export function main(state = initMainState, action) {
    switch (action.type) {
        case '@MAIN/TOGGLE_NAVBAR':
            return {
                navbarToggle: !state.navbarToggle
            };
        case '@MAIN/TOGGLE_SIGNIN':
          	return {
            	...state,
            	signInToggle: !state.signInToggle
        	};
        case '@MAIN/TOGGLE_DELETE':
      		return {
        		...state,
        		deleteToggle: {
 	         		...state.deleteToggle,
    	      		[action.id]: !state.deleteToggle[action.id]
        		}
      		};
    	case '@MAIN/TOGGLE_CONFIRM':
      		return {
        		...state,
        		confirmToggle: !state.confirmToggle
      		};
    	case '@MAIN/CHANGE_LOGIN_STATE':
      		return {
        		...state,
        		loginState: action.loginState
      		};
        default:
            return state;
    }
}

