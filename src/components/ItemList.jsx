import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import InfiniteScroll from 'react-infinite-scroller';
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

        this.handleScroll = this.handleScroll.bind(this);
    }

    render() {
        //const {posts, hasMore} = this.props;
    /*    
        let children = (
            <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
                <div className='empty-text'>No related items here.</div>
            </ListGroupItem>
        );
        if (items.length) {
            let i = 0;
            children = items.map((p1, p2, p3)=> (
                <ListGroupItem>
                    <Item {...p1} />
                    <Item {...p2} />
                    <Item {...p3} />
                </ListGroupItem>
            ));
        }
    */
        let children = (
            <ListGroupItem className='d-flex justify-content-center align-items-center'>
                    <Item />
                    <Item />
                    <Item />
            </ListGroupItem>
        );
        
        return (
            <div className='item-list'>
              <ListGroup>
                {children}
                {children}
                {children}
              </ListGroup>
            </div>
        );
    }

    handleScroll(page) {
        //const {posts, searchText} = this.props;
        //this.props.dispatch(listMoreItems(searchText, posts[posts.length - 1].receive_time, this.props.beforeMsg, posts[posts.length - 1].id)); ///when ascending
    }
}

export default connect(state => ({
/*
    items: state.post.posts,
    hasMore: state.post.hasMore,
    searchText: state.searchText
*/
}))(ItemList);
