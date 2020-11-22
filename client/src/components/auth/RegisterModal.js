import React, { Component, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
} from "reactstrap";
import { connect } from "react-redux";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

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
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className={classnames("", {
                    "is-invalid": errors.name,
                  })}
                  onChange={this.onChange}
                ></Input>
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}

                <Label for="email" className="mt-3">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={classnames("", {
                    "is-invalid": errors.email,
                  })}
                  onChange={this.onChange}
                ></Input>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}

                <Label for="password" className="mt-3">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  className={classnames("", {
                    "is-invalid": errors.password,
                  })}
                  placeholder="Password"
                  onChange={this.onChange}
                ></Input>
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}

                <Label for="password2" className="mt-3">
                  Confirm Password
                </Label>
                <Input
                  type="password"
                  name="password2"
                  id="password2"
                  className={classnames("", {
                    "is-invalid": errors.password2,
                  })}
                  placeholder="Confirm Password"
                  onChange={this.onChange}
                ></Input>
                {errors.password2 && (
                  <div className="invalid-feedback">{errors.password2}</div>
                )}

                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Register
                </Button>
              </FormGroup>
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
