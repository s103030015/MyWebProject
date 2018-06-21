import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import {connect} from 'react-redux';

import Item from 'components/Item.jsx';
import './ItemList.css';

class ItemList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
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
}

export default connect(state => ({
}))(ItemList);
