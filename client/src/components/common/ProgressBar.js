import React, { Component } from "react";
import { Progress, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProgressBar = ({ value, color, text, link, index }) => {
  return (
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
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default ProgressBar;
