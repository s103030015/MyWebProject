import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import InfiniteScroll from 'react-infinite-scroller';
import {listMorePosts} from 'states/post-actions.js';
import {connect} from 'react-redux';
import Item from 'components/Item.jsx';
import './ItemList.css';

class ItemList extends React.Component {
    static propTypes = {
      posts: PropTypes.array,
      hasMore: PropTypes.bool,
      searchText: PropTypes.string
    };
    
    constructor(props) {
        super(props);
        
        //this.handleScroll = this.handleScroll.bind(this);
    }

    render() {
        const {posts, hasMore} = this.props;
        /*
        let children = (
            <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
                <div className='empty-text'>No related items here.</div>
            </ListGroupItem>
        );
        if (posts.length) {
            let i = 0;
            children = posts.map((p1, p2, p3)=> (
                <ListGroupItem>
                    <Item {...p1} />
                    <Item {...p2} />
                    <Item {...p3} />
                </ListGroupItem>
            ));
        }
        */
    
        let p1 =  {
            id: 1,
            name: 'chicken',
            description: 'good to eat',
            price: 120,
            total: 10
        };
        let p2 =  {
            id: 2,
            name: 'burger',
            description: 'McDonald',
            price: 120,
            total: 10
        };
        let p3 =  {
            id: 3,
            name: 'noodle',
            description: 'Do you want to eat?',
            price: 120,
            total: 10
        };

        let children = (
            <ListGroupItem className='d-flex justify-content-center align-items-center'>
                    <Item {...p1} />
                    <Item {...p2} />
                    <Item {...p3} />
            </ListGroupItem>
        );
       
        return (
            <div className='item-list'>
                <ListGroup>
                    {children}
                </ListGroup>
            </div>
        );
    }
}

export default connect(state => ({
    posts: state.post.posts,
    hasMore: state.post.hasMore,
    searchText: state.searchText
}))(ItemList);
