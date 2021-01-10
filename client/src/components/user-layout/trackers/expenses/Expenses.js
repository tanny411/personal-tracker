import React, { Component } from "react";
import SavingProgress from "./SavingProgress";
import ExpenseStat from "./ExpenseStat";

export default class Expenses extends Component {
  render() {
    return (
      <div>
        <SavingProgress />
        <ExpenseStat />
      </div>
    );
  }
}
