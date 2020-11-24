//It is not a component, but it is used with components.

export default function conditionalPropType(condition, message) {
  if (typeof condition !== "function")
    throw "Wrong argument type 'condition' supplied to 'conditionalPropType'";
  return function (props, propName, componentName) {
    if (condition(props, propName, componentName)) {
      return new Error(
        `Invalid prop '${propName}' '${props[propName]}' supplied to '${componentName}'. ${message}`
      );
    }
  };
}
