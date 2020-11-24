import React, { Component } from "react";
import TodoList from "./TodoList";
import ItemModal from "./ItemModal";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";

class UserLanding extends Component {
  render() {
    let content = (
      <Container>
        <ItemModal />
        <TodoList />
      </Container>
    );
    if (this.props.auth.isLoading) {
      content = <Spinner />;
    }

    return content;
  }
}

UserLanding.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(UserLanding);
