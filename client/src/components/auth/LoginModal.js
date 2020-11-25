import React, { Component, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  NavLink,
} from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import FieldGroup from "../common/FieldGroup";

class LoginModal extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    errors: {},
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(previousProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== previousProps.error) {
      // Check for login error
      if (error.id === "LOGIN_FAIL") this.setState({ errors: error.errors });
      else this.setState({ errors: {} });
    }

    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();

    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password,
    };

    //Attempt to login
    this.props.login(user, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <Fragment>
        <NavLink onClick={this.toggle} href="#">
          Login
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FieldGroup
                label="Email"
                name="email"
                id="email"
                placeholder="Email"
                type="email"
                error={errors.email}
                onChange={this.onChange}
              />
              <FieldGroup
                label="Password"
                name="password"
                id="password"
                placeholder="Password"
                type="password"
                error={errors.password}
                onChange={this.onChange}
              />
              <Button className="bg-pink-purp" style={{ marginTop: "2rem" }} block>
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(
  withRouter(LoginModal)
);
