import React from 'react';
import PropTypes from 'prop-types';
import {Container, Button, Media} from 'reactstrap';
import {connect} from 'react-redux';

import './Info.css';

class Info extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        text: PropTypes.string,
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
          text,
          price,
          total,
        } = this.props;
    */
        return (
            <div className='info'>
              <div className="container row mr-auto ml-auto">
                    <Media className="item-image">
                        <Media object src="images/chicken.jpg" className="col-lg-6 col-12" />
                        {/*<Media className="item-image" object src={'images/'+name+'.jpg'/> */}
                    </Media>
                    <div className="item-content col-lg-6 col-12">
                        <h2>好吃炸雞</h2>
                        {/*<h2>{name}</h2> */}
                        <p className="price">120元</p>
                        {/*<p>{price}</p> */}
                        <p className="number">目前人數:10人</p>
                        {/*<p>{'目前人數：'+total}</p> */}
                        <Button className="buy" onClick={this.handleClick}>購買</Button>
                    </div>
                </div>
            </div>
        );
    }

    handleClick(e) {
        console.log("Buy!");
    }
}

export default connect((state) => {
})(Info);
