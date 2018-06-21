import React from 'react';
import PropTypes from 'prop-types';
import {Media, Button} from 'reactstrap';
import {connect} from 'react-redux';

import './Item.css';

class Item extends React.Component {
    
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className='item' onClick={this.handleClick}>
                <div>
                    <Media>
                        <Media className="item-image" object src='images/chicken.jpg' alt="Generic placeholder image" />
                    </Media>
                </div>
                <div className="item-content">
                    <h2>好吃炸雞</h2>
                    <p className="price">120元</p>
                    <p className="number">目前人數:10人</p>
                </div>
            </div>
        );
    }

    handleClick(e) {
        console.log("Click!");

        e.preventDefault();
        window.location = '/info';
    }
}

export default connect((state) => {
})(Item);
