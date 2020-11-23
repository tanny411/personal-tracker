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
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import TextFieldGroup from "../common/TextFieldGroup";

class RegisterModal extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(previousProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== previousProps.error) {
      // Check for register error
      if (error.id === "REGISTER_FAIL") this.setState({ errors: error.errors });
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

    const { name, email, password, password2 } = this.state;

    // Create a user object
    const newUser = {
      name,
      email,
      password,
      password2,
    };

    // Attempt to register
    this.props.register(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <Fragment>
        <NavLink onClick={this.toggle} href="#">
          Register
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <TextFieldGroup
                label="Name"
                name="name"
                id="name"
                placeholder="Name"
                error={errors.name}
                onChange={this.onChange}
              />
              <TextFieldGroup
                label="Email"
                name="email"
                id="email"
                placeholder="Email"
                type="email"
                error={errors.email}
                onChange={this.onChange}
              />
              <TextFieldGroup
                label="Password"
                name="password"
                id="password"
                placeholder="Password"
                type="password"
                error={errors.password}
                onChange={this.onChange}
              />
              <TextFieldGroup
                label="Confirm Password"
                name="password2"
                id="password2"
                placeholder="Confirm Password"
                type="password"
                error={errors.password2}
                onChange={this.onChange}
              />

              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Register
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

export default connect(mapStateToProps, { register, clearErrors })(
  withRouter(RegisterModal)
);
