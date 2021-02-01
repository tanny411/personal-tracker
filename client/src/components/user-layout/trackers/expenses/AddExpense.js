import React, { Component, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  Input,
  FormGroup,
  FormText,
} from "reactstrap";
import CreatableSelect from "react-select/creatable";
import FieldGroup from "../../../common/FieldGroup";
import date2str from "../../../common/date2str";

export default class AddExpense extends Component {
  state = {
    errors: {},
    modal: true,
    amount: "",
    date: date2str(new Date()),
    incexp: "",
    categories: [
      { value: "R", label: "Red" },
      { value: "G", label: "Green" },
      { value: "B", label: "Blue" },
    ],
    subCategories: [
      { value: "R", label: "Red" },
      { value: "G", label: "Green" },
      { value: "B", label: "Blue" },
    ],
    cat: null,
    subCat: null,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggle = () => this.setState({ modal: !this.state.modal });

  onSubmit = (e) => {
    e.preventDefault();
    /*query db*/
  };

  selectChange = (newValue, actionMeta) => {
    this.setState({ [actionMeta.name]: newValue });
    console.log(actionMeta);
    console.warn(actionMeta.action === "create-option");
  };

  render() {
    const { errors } = this.state;
    const form = (
      <Form onSubmit={this.onSubmitDate}>
        <FieldGroup
          label="Amount"
          type="number"
          name="amount"
          id="amount"
          value={this.state.amount}
          error={errors.from}
          onChange={this.onChange}
        />
        <FieldGroup
          label="Date"
          type="date"
          name="date"
          id="date"
          value={this.state.date}
          error={errors.to}
          onChange={this.onChange}
        />
        <FormGroup check inline>
          <Label check>
            <Input
              type="radio"
              name="incexp"
              value="income"
              onChange={this.onChange}
            />{" "}
            Income
          </Label>
        </FormGroup>
        <FormGroup check inline className="mb-3">
          <Label check>
            <Input
              type="radio"
              name="incexp"
              value="expense"
              onChange={this.onChange}
            />{" "}
            Expense
          </Label>
        </FormGroup>
        {this.state.incexp === "expense" ? (
          <Fragment>
            <FormGroup>
              <CreatableSelect
                isClearable
                isSearchable
                onChange={this.selectChange}
                options={this.state.categories}
                value={this.state.cat}
                name="cat"
              />
              <FormText color="muted">
                Start typing to search or create new options
              </FormText>
            </FormGroup>
            <FormGroup>
              <CreatableSelect
                isClearable
                isSearchable
                onChange={this.selectChange}
                options={this.state.subCategories}
                name="subCat"
                value={this.state.subCat}
              />
              <FormText color="muted">
                Start typing to search or create new options
              </FormText>
            </FormGroup>
          </Fragment>
        ) : null}
        <FieldGroup
          label="Comment"
          type="text"
          name="comment"
          id="comment"
          value={this.state.comment}
          error={errors.comment}
          onChange={this.onChange}
        />
      </Form>
    );

    return (
      <div>
        <Button className="bg-pink-purp addact-btn" onClick={this.toggle}>
          Add activity
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
          <ModalHeader toggle={this.toggle}>Add activity</ModalHeader>
          <ModalBody>{form}</ModalBody>
          <ModalFooter>
            <Button color="success" block>
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
