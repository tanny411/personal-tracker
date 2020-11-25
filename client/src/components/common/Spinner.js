import React from "react";

export default function Spinner() {
  return (
    <div className="w-50 text-center" style={{margin:"auto"}}>
      <i
        className="fa fa-spinner fa-spin purp-lightest"
        style={{ fontSize: "100px"}}
      ></i>
    </div>
  );
}
