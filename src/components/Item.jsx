import React from 'react';
import PropTypes from 'prop-types';
import {Media, Button} from 'reactstrap';
import {connect} from 'react-redux';

import './Item.css';

class Item extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        total: PropTypes.number,
    };
    
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
    /*
        const {
          id,
          name,
          description,
          price,
          total,
        } = this.props;
    */
        return (
            <div className='item' onClick={this.handleClick}>
                <div>
                    <Media>
                        <Media className="item-image" object src='images/chicken.jpg' alt="Generic placeholder image" />
                        {/*<Media className="item-image" object src={'images/'+name+'.jpg'/> */}
                    </Media>
                </div>
                <div className="item-content">
                    <h2>好吃炸雞</h2>
                    {/*<h2>{name}</h2> */}
                    <p className="price">120元</p>
                    {/*<p>{price}</p> */}
                    <p className="number">目前人數:10人</p>
                    {/*<p>{'目前人數：'+total}</p> */}
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
    //name: state.post.name[ownProps.id],
})(Item);
