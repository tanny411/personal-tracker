import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  label,
  type,
  name,
  id,
  placeholder,
  className,
  error,
  onChange,
  info,
  disabled,
}) => {
  return (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={classnames(className, {
          "is-invalid": error,
        })}
        onChange={onChange}
        disabled={disabled}
      ></Input>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </FormGroup>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.string,
};

TextFieldGroup.defaultProps = {
  type: "text",
};

export default TextFieldGroup;
