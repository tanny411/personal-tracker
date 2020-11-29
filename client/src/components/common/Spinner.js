import React from "react";

export default function Spinner() {
  return (
    <div className="w-50 text-center" style={{margin:"auto", padding: "3rem"}}>
      <i
        className="fa fa-circle-o-notch fa-spin purp-lightest"
        style={{ fontSize: "50px"}}
      ></i>
    </div>
  );
}
