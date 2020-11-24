import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import PropTypes from "prop-types";
import { NavLink } from "reactstrap";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  logout = () => this.props.logout();

  render() {
    return (
      <Fragment>
        <NavLink onClick={this.logout} href="#">
          Logout
        </NavLink>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
