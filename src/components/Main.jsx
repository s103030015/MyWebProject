import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, 
  Route, 
  Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button
} from 'reactstrap';
import {connect} from 'react-redux';

import Login from 'components/Login.jsx';
import Home from 'components/Home.jsx';
import ItemList from 'components/ItemList.jsx';
import Item from 'components/Item.jsx';
import UserPage from 'components/UserPage.jsx';
import {setSearchText, listPosts} from 'states/post-actions.js';

import {
  toggleNavbar, 
  toggleSignIn, 
  changeLoginState,
} from 'states/main-actions.js';
import './Main.css';

class Main extends React.Component {
  static propTypes = {
    navbarToggle: PropTypes.bool,
    dispatch: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.searchEl = null;
    this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
  }

  render() {
    const {navbarToggle, loginState} = this.props;
    
    return (
      <Router>
          <div className='main'>
            <div className='bg-light'>
                <div className='container'>
                    <Navbar color='faded' light expand="md">
                      <NavbarToggler onClick={this.handleNavbarToggle}/>
                      <NavbarBrand className='text-info' href="/">NexShop</NavbarBrand>
                      <Collapse isOpen={navbarToggle} navbar>
                          <Nav navbar>
                              <NavItem>
                                  <NavLink tag={Link} to='/items'>食品</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink tag={Link} to='/cart'>購物車</NavLink>
                              </NavItem>
                          </Nav>
                      </Collapse>
                      <Nav navbar>
                        <NavItem>
                          <NavLink tag={Link} to='/login'>Login</NavLink>
                        </NavItem>
                      </Nav>
                    </Navbar>
                </div>
            </div>
            <Route exact path="/" render={() => (
                        <Home />
                    )}/>
            <Route exact path="/items" render={() => (
                        <ItemList />
                    )}/>
            <Route exact path="/cart" render={() => (
                        <Item />
                    )}/>
            <Route exact path="/login" render={() => (
                        <Login />
                    )}/>
          </div>
      </Router>
    );
  }

  handleNavbarToggle() {
    this.props.dispatch(toggleNavbar());
  }
}

export default connect(state => ({
  ...state.main,
  searchText: state.searchText
}))(Main);