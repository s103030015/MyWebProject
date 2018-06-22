/* Search text */

export function searchText(state = '', action) {
    switch (action.type) {
        case '@SEARCH_TEXT/SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
}

/* Posts */
const initPostState = {
    postLoading: false,
    posts: [],
    hasMore: false
};
export function post(state = initPostState, action) {
    switch (action.type) {
        case '@POST/START_LOADING':
            return {
                ...state,
                postLoading: true
            };
        case '@POST/END_LOADING':
            return {
                ...state,
                postLoading: false
            };
        case '@POST/END_LIST_POSTS':
            return {
                ...state,
                posts: action.posts,
                hasMore: action.posts.length > 0
            };
        case '@POST/END_LIST_MORE_POSTS':
            return {
                ...state,
                posts: [...state.posts, ...action.posts],
                hasMore: action.posts.length > 0
            };
        case '@POST/END_CREATE_POST':
            var newPosts = state.posts.slice();
            newPosts.unshift(action.post);
            return {
                ...state,
                posts: newPosts
            };
        case '@POST/END_CREATE_COMMENT':
            var newPosts = state.posts.map(p =>{
                    if (p.id === action.post.id){
                        return action.post;
                    }
                    return p;
                });
                return {
                    ...state,
                    posts: newPosts,
                };
        default:
            return state;
    }
}

/* Post item */
const initPostItemState = {
    tooltipOpen: {},
    commentOpen: {}
};

export function postItem(state = initPostItemState, action) {
    switch (action.type) {
        case '@POST_ITEM/TOGGLE_TOOLTIP':
            return {
                ...state,
                tooltipOpen: {
                    ...state.tooltipOpen,
                    [action.id]: state.tooltipOpen[action.id] ? false : true
                }
            };
        case '@POST_ITEM/SET_TOOLTIP_TOGGLE':
            return {
                ...state,
                tooltipOpen: {
                    ...state.tooltipOpen,
                    [action.id]: action.toggle
                }
            };
        case '@POST_ITEM/COMMENT_TOGGLE':
            return{
                ...state,
                commentOpen: {
                    ...state.commentOpen,
                    [action.id]: state.commentOpen[action.id] ? false : true
                }
            };
        default:
            return state;
    }
}

/* Comment Form */
const initCommentFormState = {
    inputText: '',
    inputName: '',
};

export function commentForm(state = initCommentFormState, action) {
    switch (action.type) {
        case '@COMMENT_FORM/INPUT_TEXT':
            return {
                ...state,
                inputText: action.text
            };
        case '@COMMENT_FORM/INPUT_NAME':
            return {
                ...state,
                inputName: action.name
            };
        default:
            return state;
    }
}