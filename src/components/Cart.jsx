import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {
  Alert,
  Button, 
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, 
  Table,
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import {toggleSignIn, logout} from 'states/main-actions.js'; 
import './Login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
	
	this.toggle = this.toggle.bind(this);
	this.state = {
		dropdownOpen: false
	};
/*
    this.handleSignInToggle = this.handleSignInToggle.bind(this);*/
  }

  toggle() {
	  this.setState({
		  dropdownOpen: !this.state.dropdownOpen
	  });
  }

  render() {
    const { cartItem, deleteCartItem } = this.props;
	const totalPrice = 120;
    /*const {
      user_id_input_danger,
      password_input_danger,
      name_input_danger,
      user_id,
      password,
      name,
      user_id_conflict,
      name_conflict,
      user_id_and_password_match,
      user,
      loginOverLimit
    } = this.props;*/
    
    return (
      <Router>
          <div className='cart'>
            <Table hover size="sm">
              <thead>
				<tr>
					<th>#</th>
					<th>品項</th>
					<th>價格</th>
					<th>數量</th>
				</tr>
			   </thead>
			  <tbody>
				<tr>
					<th scope="row">1</th>
					<td>chicken</td>
					<td>120</td>
					<td>
						<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							<DropdownToggle caret>
								2
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem>1</DropdownItem>
								<DropdownItem>2</DropdownItem>
								<DropdownItem>3</DropdownItem>
							</DropdownMenu>
						</ButtonDropdown>
					</td>
					<td><Button color="danger" onClick={() => deleteCartItem(index)}>X</Button>{' '}</td>
			    </tr>
			  </tbody>
			 </Table>
			 <Alert color="success" className="text-right">
				總價：
					{totalPrice}
				元
			 </Alert>
          </div>
      </Router>
    );
  }

 /* handleSignInToggle() {
    this.props.dispatch(toggleSignIn());
  }*/
}

export default connect(state => ({
  signInToggle: state.main.signInToggle
}))(Login);
