import React from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Container, Button} from 'reactstrap';
import {connect} from 'react-redux';

import './Home.css';

class Home extends React.Component {
    
    render() {
        return (
            <div className='home'>
              <Jumbotron className='about'>
                <h1 className="icon display-3">NexStore</h1>
                <p className="description">Buy what you want from all over the world!</p>
              </Jumbotron>
            </div>
        );
    }
}

export default connect((state) => {
})(Home);
