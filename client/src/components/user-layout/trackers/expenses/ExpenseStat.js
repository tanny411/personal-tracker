import React, { Component } from "react";
import { Container } from "reactstrap";
import DateForm from "./DateForm";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

export default class ExpenseStat extends Component {
  render() {
    return (
      <Container>
        <h1 className="cursive">Your expenditure statistics</h1>
        <DateForm />
        <PieChart />
        <LineChart />
      </Container>
    );
  }
}
