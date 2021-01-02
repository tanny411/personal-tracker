import React, { Component } from "react";
import { Progress, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProgressBar = ({ value, color, text, link, customClickEvent }) => {
  return (
    <Link
      to={link}
      className="progressbar-link"
      onClick={customClickEvent ? customClickEvent : null}
    >
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
  link: PropTypes.string,
  customClickEvent: PropTypes.func,
};

ProgressBar.defaultProps = {
  link: "#",
};

export default ProgressBar;
