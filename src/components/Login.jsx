import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {
  Button, 
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

    this.handleSignInToggle = this.handleSignInToggle.bind(this);
  }


  render() {
    const {signInToggle, loginState} = this.props;
    const {
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
    } = this.props;
    
    return (
      <Router>
          <div className='login'>
            <Form className='myform'>
              <FormGroup>
                <Label for="userid">User ID</Label>
                <Input type="email" name="email" id="userid" placeholder="your email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="enter your password" />
              </FormGroup>
              <div className='btn'>
                <Button color='primary'>Submit</Button>
                <Button color="link" onClick={this.handleSignInToggle}>Not a User?</Button>
              </div>
            </Form>
            <div>
              <Modal isOpen={signInToggle} toggle={this.handleSignInToggle}>
                <ModalHeader toggle={this.handleSignInToggle}>Register</ModalHeader>
                  <ModalBody>
                    <Form>
                      <FormGroup>
                        <Label for="userid">User ID</Label>
                        <Input type="email" name="userid" id="userid" placeholder="your email" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="enter your password" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="your nickname here" />
                      </FormGroup>
                    </Form>                 
                  </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.handleSignInToggle}>Cancel</Button>
                  <Button color="primary" onClick={this.handleSignInToggle}>Submit</Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
      </Router>
    );
  }

  handleSignInToggle() {
    this.props.dispatch(toggleSignIn());
  }
}

export default connect(state => ({
  signInToggle: state.main.signInToggle
}))(Login);