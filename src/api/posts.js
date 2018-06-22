import axios from 'axios';
import uuid from 'uuid/v4';
import moment from 'moment';
import 'babel-polyfill';

const postKey = 'posts';

export function listPosts(searchText = '') {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listPosts(searchText));
        }, 500);
    });
}


// Simulated server-side code
function _listPosts(searchText = '') {
    let postString = localStorage.getItem(postKey);
    let posts = postString ? JSON.parse(postString) : [];
    if (posts.length > 0 && searchText) {
        posts = posts.filter(p => {
            return p.text.toLocaleLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        });
    }
    return posts;
};

export function createPost(name, price, description) {
    return new Promise((resolve, reject) => {
        resolve(_createPost(name, price, description));
    });
}

// Simulated server-side code
function _createPost(name, price, description) {
    const newPost = {
        id: uuid(),
        name: name,
        description: description,
        price: price,
        total: 0,
        comments:[],
        ts: moment().unix()
    };
    const posts = [
        newPost,
        ..._listPosts()
    ];
    localStorage.setItem(postKey, JSON.stringify(posts));
    return newPost;
}

export function createComment(id, username, text){
    return new Promise((resolve, reject) =>{
        resolve(_createComment(id, username, text));
    });
}

function _createComment(id, username, text){
    const newComment = {
        id: uuid(),
        post_id: id,
        username: username,
        text: text,
        ts: moment().unix()
    };

    const posts = _listPosts().map(p => {
        if (p.id === id) {
            p['comments'] = [
                newComment,
                ...p['comments']
            ];
        }
        return p;
    });
    localStorage.setItem(postKey, JSON.stringify(posts));
    const newPost = posts.find(p => p.id === id);
    return newPost;
}
