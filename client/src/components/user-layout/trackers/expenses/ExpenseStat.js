import React, { Component } from "react";
import { Container } from "reactstrap";
import DateForm from "./DateForm";
import PieChart from "./PieChart";

export default class ExpenseStat extends Component {
  render() {
    return (
      <Container className="">
        <h1 className="cursive">Your expenditure statistics</h1>
        <DateForm />
        <PieChart />
      </Container>
    );
  }
}
