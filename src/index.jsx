import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';

import 'bootstrap/dist/css/bootstrap.css';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {main} from 'states/main-reducers.js';
import {searchText, post, postItem, commentForm, postForm} from 'states/post-reducers.js';

window.onload = function() {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers({
            searchText, post, postItem, commentForm,
            main, postForm
        }), composeEnhancers(applyMiddleware(thunkMiddleware/*, loggerMiddleware*/)));

    ReactDOM.render(
    	<Provider store={store}>
        	<Main />
        </Provider>,
        document.getElementById('root')
    );
};
