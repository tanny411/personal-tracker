import React, { Component } from "react";
import TodoList from "./TodoList";
import ItemModal from "./ItemModal";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class UserLanding extends Component {
  componentDidUpdate() {
      console.log(this.props.auth);
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <Container>
        <ItemModal />
        <TodoList />
      </Container>
    );
  }
}

UserLanding.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(UserLanding);
