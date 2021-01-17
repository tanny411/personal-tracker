import React, { Component } from "react";
import { Button, Container, Form } from "reactstrap";
import FieldGroup from "../../../common/FieldGroup";

export default class DateForm extends Component {
  date2str = (date) => {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    let str = year + "-" + month + "-" + day;
    return str;
  };

  today = new Date();
  todayStr = this.date2str(this.today);

  state = {
    errors: {},

    from: this.todayStr,
    to: this.todayStr,

    //Form values
    amount: "",
    date: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeOptions = (e) => {
    let from = "";
    let to = "";

    switch (e.target.value) {
      case "Today":
        from = this.todayStr;
        to = this.todayStr;
        break;
      case "Last week":
        from = this.date2str(
          new Date(
            this.today.getFullYear(),
            this.today.getMonth(),
            this.today.getDate() - 7
          )
        );
        to = this.todayStr;
        break;
      case "Last month":
        from = this.date2str(
          new Date(
            this.today.getFullYear(),
            this.today.getMonth() - 1,
            this.today.getDate()
          )
        );
        to = this.todayStr;
        break;
      case "Last year":
        from = this.date2str(
          new Date(
            this.today.getFullYear() - 1,
            this.today.getMonth(),
            this.today.getDate()
          )
        );
        to = this.todayStr;
        break;
      default:
        break;
    }
    this.setState({ from, to });
  };

  onSubmitDate = (e) => {
    e.preventDefault();
    /*query db. also check start<=end and not "" from server side*/
  };

  render() {
    const { errors } = this.state;
    const dateOptions = [
      "Today",
      "Last week",
      "Last month",
      "Last year",
      "Custom",
    ];

    return (
      <Form onSubmit={this.onSubmitDate} className="form-inline my-3">
        <FieldGroup
          label="From:"
          type="date"
          name="from"
          id="from"
          value={this.state.from}
          className="mr-2"
          labelClassName="mr-2"
          error={errors.from}
          onChange={this.onChange}
        />
        <FieldGroup
          label="To:"
          type="date"
          name="to"
          id="to"
          value={this.state.to}
          className="mr-2"
          labelClassName="mr-2"
          error={errors.to}
          onChange={this.onChange}
        />
        <FieldGroup
          label=""
          type="select"
          name="options"
          id="options"
          className="mr-2"
          options={dateOptions}
          error={errors.options}
          onChange={this.onChangeOptions}
        />
        <Button className="bg-pink-purp">Go</Button>
      </Form>
    );
  }
}
