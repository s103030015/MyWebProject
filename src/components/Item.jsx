import React from 'react';
import PropTypes from 'prop-types';
import {
    Media, 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody,  
    ModalFooter
} from 'reactstrap';
import {connect} from 'react-redux';

import {toggleTooltip} from 'states/post-actions.js'; 
import './Item.css';

class Item extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        total: PropTypes.number,
        comments: PropTypes.array,
        toggleOpen: PropTypes.bool,
        dispatch: PropTypes.func
    };
    
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };
        this.handleDetailToggle = this.handleDetailToggle.bind(this);
    }



    render() { 
        const {id, name, description, price, total, comments} = this.props;
        const toggleOpen = this.props;

        return (
            <div className='item' onClick={this.handleClick}>
                <div>
                    <Media>
                        <Media className="item-image" object src={'images/' + name + '.jpg'}/>
                    </Media>
                </div>
                <div className="item-content">
                    <h2>{name}</h2>
                    <p>{price}</p>
                    <p>{'目前人數：'+ total}</p>
                </div>
                <Button className="detail" color="info" onClick={this.handleDetailToggle}>Detail</Button>
                <Modal isOpen={this.state.modal} toggle={this.handleDetailToggle}>
                    <ModalHeader toggle={this.handleDetailToggle}>Description</ModalHeader>
                    <ModalBody>
                        <p>{description}</p>     
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleDetailToggle}>Ok</Button>{''}
                    </ModalFooter>
                </Modal>
                <Button className="cart" color="secondary">加入購物車</Button>
            </div>
        );
    }

    handleDetailToggle() {
        this.setState({
            modal: !this.state.modal
        });
        //this.props.dispatch(toggleTooltip());
        //console.log(this.props.toggleOpen);
    }
}

export default connect((state) => {
    //name: state.post.name[ownProps.id]
    toggleOpen: state.postItem.toggleOpen
})(Item);
