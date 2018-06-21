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
  FormText
} from 'reactstrap';
import './Login.css';
/*
import {toggleNavbar, toggleSignIn, changeLoginState} from 'states/main-actions.js';
import {
  registerInputUserid,
  registerInputPassword,
  registerInputName,
  registerDangerInputUserid,
  registerDangerInputPassword,
  registerDangerInputName,
  registerReset,
  inputConflictUserid,
  inputConflictName,
  checkUseridAvailability,
  login,
  loginCookie,
  logout
} from 'states/login-actions.js';
import {userLogin} from 'states/user-actions.js';
*/

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    //const {signInToggle, loginState} = this.props;
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
                <Label for="username">Username</Label>
                <Input type="email" name="email" id="username" placeholder="your email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="enter your password" />
              </FormGroup>
              <div className='btn'>
                <Button color='primary'>Submit</Button>
                <Button color='link'>Not a user?</Button>
              </div>
            </Form>
          </div>
      </Router>
    );
  }
}

export default connect(state => ({
}))(Login);