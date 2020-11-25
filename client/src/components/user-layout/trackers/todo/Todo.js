import React, { Component } from "react";
import { Container } from "reactstrap";
import ItemModal from "./ItemModal";
import TodoList from "./TodoList";

export default class Todo extends Component {
  render() {
    return (
      <Container>
        <ItemModal />
        <TodoList />
      </Container>
    );
  }
}
