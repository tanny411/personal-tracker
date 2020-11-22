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
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

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
              <FormGroup>
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

                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Login
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

export default connect(mapStateToProps, { login, clearErrors })(
  withRouter(LoginModal)
);
