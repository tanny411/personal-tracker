import React, { Component } from "react";
import { Progress, Container, Row, Col } from "reactstrap";
import {Link} from 'react-router-dom';

export default class ProgressComponent extends Component {
  progressBarsValues = [
    { value: 50, color: "success", text: "Money saved", link: "/expenses" },
    { value: 10, color: "info", text: "Todos Completed", link: "/todo" },
    { value: 90, color: "warning", text: "Habit Built", link: "#" },
    { value: 100, color: "danger", text: "Helped Others", link: "#" },
  ];
  render() {
    let progressBarsContent = this.progressBarsValues.map(
      ({ value, color, text, link }, index) => (
        <Link to={link} className="progressbar-link" key={index}>
          <Row className="py-3 bg-custom-light">
            <Col md="3">{text}</Col>
            <Col md="9" style={{ margin: "auto" }}>
              <Progress
                striped
                value={value}
                color={color}
                className="progressbar-styles"
              >
                {value}%
              </Progress>
            </Col>
          </Row>
        </Link>
      )
    );
    return <Container className="my-3">{progressBarsContent}</Container>;
  }
}
