import React from "react";
import { FormGroup, Label, Input, FormText } from "reactstrap";
import classnames from "classnames";
import PropTypes from "prop-types";
import conditionalPropType from "./conditionalPropType";

const FieldGroup = ({
  label,
  type,
  name,
  id,
  placeholder,
  className,
  labelClassName,
  error,
  onChange,
  info,
  disabled,
  value,
  options,
}) => {
  return (
    <FormGroup>
      <Label for={id} className={labelClassName}>
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        className={classnames(className, {
          "is-invalid": error,
        })}
        onChange={onChange}
        disabled={disabled}
      >
        {type === "select"
          ? options.map((optionValue) => <option>{optionValue}</option>)
          : null}
      </Input>
      {info && <FormText color="muted">{info}</FormText>}
      {error && <div className="invalid-feedback">{error}</div>}
    </FormGroup>
  );
};

FieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  disabled: PropTypes.string,
  options: conditionalPropType(
    (props, propName, componentName) =>
      props["type"] === "select" &&
      (props[propName] === undefined || !Array.isArray(props[propName])),
    "'options' must be an array if 'type' is select"
  ),
};

FieldGroup.defaultProps = {
  type: "text",
};

export default FieldGroup;
