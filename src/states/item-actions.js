import {
    listPosts as listPostsFromApi,
    createPost as createPostFromApi,
    createComment as createCommentFromApi
} from 'api/posts.js';

/*  Search text */

export function setSearchText(searchText) {
    return {
        type: '@SEARCH_TEXT/SET_SEARCH_TEXT',
        searchText
    };
}

/*  Posts */
function startLoading() {
    return {
        type: '@POST/START_LOADING'
    };
}

function endLoading() {
    return {
        type: '@POST/END_LOADING'
    };
}

function endListPosts(posts) {
    return {
        type: '@POST/END_LIST_POSTS',
        posts
    };
}

function endListMorePosts(posts) {
    return {
        type: '@POST/END_LIST_MORE_POSTS',
        posts
    };
}

function endCreatePost(post) {
    return {
        type: '@POST/END_CREATE_POST',
        post
    };
}

function endCreateComment(post) {
    return {
        type: '@POST/END_CREATE_COMMENT',
        post
    };
}

export function listPosts(searchText) {
    return (dispatch, getState) => {
        dispatch(startLoading());

        return listPostsFromApi(searchText).then(posts => {
            dispatch(endListPosts(posts));
        }).catch(err => {
            console.error('Error listing posts', err);
        }).then(() => {
            dispatch(endLoading());
        });
    };
};

export function listMorePosts(searchText, start) {
    return (dispatch, getState) => {
        dispatch(startLoading());

        return listPostsFromApi(searchText, start).then(posts => {
            dispatch(endListMorePosts(posts));
        }).catch(err => {
            console.error('Error listing more posts', err);
        }).then(() => dispatch(endLoading()));
    };
};

export function createPost(name, price, description) {
    return (dispatch, getState) => {
        dispatch(startLoading());

        return createPostFromApi(name, price, description).then(post => {
            dispatch(endCreatePost(post));
        }).catch(err => {
            console.error('Error creating post', err);
        }).then(() => dispatch(endLoading()));
    };
};

export function createComment(id, username, text) {
        return (dispatch, getState) => {
        dispatch(startLoading());

        return createCommentFromApi(id, username, text).then(post => {
            dispatch(endCreateComment(post));
        }).catch(err => {
            console.error('Error creating comment', err);
        }).then(() => dispatch(endLoading()));
    };
};

/*  Post item */
export function toggleTooltip(id) {
    return {
        type: '@POST_ITEM/TOGGLE_TOOLTIP',
        id
    };
};

export function setTooltipToggle(id, toggle) {
    return {
        type: '@POST_ITEM/SET_TOOLTIP_TOGGLE',
        id,
        toggle
    };
};

export function commentToggle(id, toggle_c) {
    return {
        type: '@POST_ITEM/COMMENT_TOGGLE',
        id
    };
};

/* Comment Form */
export function setInputText(text) {
    return {
        type: '@COMMENT_FORM/INPUT_TEXT',
        text
    };
};

export function setInputName(name) {
    return {
        type: '@COMMENT_FORM/INPUT_NAME',
        name
    };
};