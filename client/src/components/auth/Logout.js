import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import PropTypes from "prop-types";
import { NavLink } from "reactstrap";
import { withRouter } from "react-router-dom";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  logout = () => this.props.logout(this.props.history);

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

export default connect(null, { logout })(withRouter(Logout));
