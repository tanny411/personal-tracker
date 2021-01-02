import React, { Component } from "react";
import ProgressBar from "../../../common/ProgressBar";
import { Collapse, Container } from "reactstrap";

export default class Expenses extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  mainProgressBar = { value: 50, color: "success", text: "Money saved" };
  progressBarsValues = [
    { value: 10, color: "info", text: "Education" },
    { value: 90, color: "warning", text: "Donate" },
    { value: 100, color: "danger", text: "Travels" },
  ];

  render() {
    const { isOpen } = this.state;
    let collapseItems = this.progressBarsValues.map(
      ({ value, color, text }, index) => (
        <ProgressBar value={value} color={color} text={text} key={index} />
      )
    );
    const { value, color, text } = this.mainProgressBar;
    return (
      <Container className="my-1">
        <ProgressBar
          value={value}
          color={color}
          text={text}
          customClickEvent={this.toggle}
        />
        <Collapse isOpen={isOpen}>{collapseItems}</Collapse>
      </Container>
    );
  }
}
