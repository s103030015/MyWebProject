import React from 'react';
import PropTypes from 'prop-types';
import {Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText
} from 'reactstrap';
import {connect} from 'react-redux';
import {
    createPost, 
    inputProductName,
    inputDescription,
    inputProductPrice, 
    inputDanger, 
} from 'states/post-actions.js';

import './UserPage.css';

class UserPage extends React.Component {
    static propTypes = {
        inputItemName: PropTypes.string,
        inputItemText: PropTypes.string,
        inputItemPrice: PropTypes.string,
        inputDanger: PropTypes.bool,           
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.handleInputName = this.handleInputName.bind(this);
        this.handleInputText = this.handleInputText.bind(this);
        this.handleInputPrice = this.handleInputPrice.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }
    
    render() {
        const {inputItemName, inputItemText, inputItemPrice} = this.props;
        const inputDanger = this.props.inputDanger ? 'has-danger' : '';

        return (
              <div className='userpage'>
                <Form className='myform'>
                  <FormGroup>
                    <Label for="name">Product Name</Label>
                    <Input type="text" name="name" id="name" placeholder="enter a name..." value={inputItemName} onChange={this.handleInputName}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="des">Description</Label>
                    <Input type="text" name="des" id="des" placeholder="add some description..." value={inputItemText} onChange={this.handleInputText}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="price">Price</Label>
                    <Input type="number" name="price" id="price" value={inputItemPrice} onChange={this.handleInputPrice}/>
                  </FormGroup>
                  <div className='btn'>
                    <Button color='primary' onClick={this.handleConfirm}>Submit</Button>
                  </div>
                </Form>
              </div>
        );
    }

    handleInputName(e) {
        const text = e.target.value
        this.props.dispatch(inputProductName(text));
        if (text && this.props.inputDanger) {
            this.props.dispatch(inputDanger(false));
        }
    }

    handleInputText(e) {
        const text = e.target.value
        this.props.dispatch(inputDescription(text));
        if (text && this.props.inputDanger) {
            this.props.dispatch(inputDanger(false));
        }
    }

    handleInputPrice(e) {
        const text = e.target.value
        this.props.dispatch(inputProductPrice(text));
        if (text && this.props.inputDanger) {
            this.props.dispatch(inputDanger(false));
        }
    }

    handleConfirm(e) {
        console.log("Create!");

        //inputText = ''
        if (!this.props.inputItemName || !this.props.inputItemText || !this.props.inputItemPrice) {
            this.props.dispatch(inputDanger(true));
            return;
        }

        this.props.dispatch(createPost(inputItemName, inputItemText, inputProductPrice));
        this.props.dispatch(inputProductName(''));
        this.props.dispatch(inputDescription(''));
        this.props.dispatch(inputProductPrice(''));
    }
}

export default connect((state) => ({
    inputItemName: state.postForm.inputItemName,
    inputItemText: state.postForm.inputItemText,
    inputItemPrice: state.postForm.inputProductPrice,
    inputDanger: state.postForm.inputDanger
}))(UserPage);