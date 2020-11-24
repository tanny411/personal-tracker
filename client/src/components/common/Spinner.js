import React from "react";

export default function Spinner() {
  return (
    <div className="w-50 text-center" style={{margin:"auto"}}>
      <i
        className="far fa-snowflake fa-spin purp-lightest"
        style={{ fontSize: "100px"}}
      ></i>
    </div>
  );
}
