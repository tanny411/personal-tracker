import React, { Component } from "react";
import { Container } from "reactstrap";
import DateForm from "./DateForm";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import AddExpense from "./AddExpense";

export default class ExpenseStat extends Component {
  render() {
    return (
      <Container>
        <h1 className="cursive">Your expenditure statistics</h1>
        <div className="d-flex flex-column flex-lg-row-reverse justify-content-between">
          <AddExpense />
          <DateForm />
        </div>
        <PieChart />
        <LineChart />
      </Container>
    );
  }
}
