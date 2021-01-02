import React from "react";
import { Progress, Container, Row, Col, FormText } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProgressBar = ({
  value,
  color,
  text,
  link,
  subtext,
  customClickEvent,
}) => {
  return (
    <Link
      to={link}
      className="progressbar-link"
      onClick={customClickEvent ? customClickEvent : null}
    >
      <Row className="py-3 bg-custom-light">
        <Col md="3">
          {text}
          {subtext && <FormText color="muted">{subtext}</FormText>}
        </Col>
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
  subtext: PropTypes.string,
  link: PropTypes.string,
  customClickEvent: PropTypes.func,
};

ProgressBar.defaultProps = {
  link: "#",
};

export default ProgressBar;
