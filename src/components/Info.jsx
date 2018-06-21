import React from 'react';
import PropTypes from 'prop-types';
import {Container, Button, Media} from 'reactstrap';
import {connect} from 'react-redux';

import './Info.css';

class Info extends React.Component {
    
    render() {
        return (
            <div className='info'>
              <div className="container row mr-auto ml-auto">
                    <Media className="item-image">
                        <Media object src="images/chicken.jpg" className="col-lg-6 col-12" />
                    </Media>
                    <div className="item-content col-lg-6 col-12">
                        <h2>好吃炸雞</h2>
                        <p className="price">120元</p>
                        <p className="number">人數:10人</p>
                        <Button className="buy">購買</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
})(Info);
