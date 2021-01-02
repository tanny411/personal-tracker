import React, { Component } from "react";
import ProgressBar from "../../../common/ProgressBar";

export default class Expenses extends Component {
  render() {
    return (
      <div>
        <ProgressBar
          value={50}
          color="success"
          text="Money saved"
          link="/expenses"
          index={1}
        />
      </div>
    );
  }
}
