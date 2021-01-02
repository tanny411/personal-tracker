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
    {
      value: 10,
      color: "info",
      text: "Education",
      subtext: "How much have you saved in this category?",
    },
    {
      value: 90,
      color: "warning",
      text: "Donate",
      subtext: "How much have you saved in this category?",
    },
    {
      value: 100,
      color: "danger",
      text: "Travels",
      subtext: "How much have you saved in this category?",
    },
  ];

  render() {
    const { isOpen } = this.state;
    let collapseItems = this.progressBarsValues.map(
      ({ value, color, text, subtext }, index) => (
        <ProgressBar
          value={value}
          color={color}
          text={text}
          subtext={subtext}
          key={index}
        />
      )
    );
    const { value, color, text } = this.mainProgressBar;
    return (
      <Container className="my-3">
        <ProgressBar
          value={value}
          color={color}
          text={text}
          customClickEvent={this.toggle}
        />
        <Collapse className="w-75 m-auto" isOpen={isOpen}>
          {collapseItems}
        </Collapse>
      </Container>
    );
  }
}
