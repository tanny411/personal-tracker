import React, { Component } from "react";
import { Progress, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ProgressBar from "../../common/ProgressBar";

export default class ProgressComponent extends Component {
  progressBarsValues = [
    { value: 50, color: "success", text: "Money saved", link: "/expenses" },
    { value: 10, color: "info", text: "Todos Completed", link: "/todo" },
    { value: 90, color: "warning", text: "Habit Built", link: "#" },
    { value: 100, color: "danger", text: "Helped Others", link: "#" },
  ];
  render() {
    let progressBarsContent = this.progressBarsValues.map(
      ({ value, color, text, link }, key) => (
        <ProgressBar
          value={value}
          color={color}
          text={text}
          link={link}
          key={key}
        />
      )
    );
    return <Container className="my-3">{progressBarsContent}</Container>;
  }
}
