import React, { Component } from "react";
import TodoList from "./TodoList";
import ItemModal from "./ItemModal";
import { Container } from "reactstrap";

class UserLanding extends Component {
  render() {
    return (
      <Container>
        <ItemModal />
        <TodoList />
      </Container>
    );
  }
}

export default UserLanding;
