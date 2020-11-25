import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import RegisterModal from "../auth/RegisterModal";
import LoginModal from "../auth/LoginModal";
import Logout from "../auth/Logout";
import Trackers from "../user-layout/Trackers";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AppNavbar extends Component {
  // we can make a constructor and bind functions in it
  // but instead of we use arrow function, we don't need to bind
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         isOpen: false
  //     }
  // }

  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <NavLink tag={Link} to="/dashboard">
            {" "}
            Home{" "}
          </NavLink>
        </NavItem>
        <NavItem>
          <Trackers />
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/settings">
            {" "}
            Settings{" "}
          </NavLink>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar className="bg-purp-dark" expand="sm" dark>
          <Container>
            <NavbarBrand href={isAuthenticated ? "/dashboard" : "/"}>
              TodoList
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);
