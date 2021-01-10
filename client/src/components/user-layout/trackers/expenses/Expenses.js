import React, { Component, Fragment } from "react";
import ProgressBar from "../../../common/ProgressBar";
import {
  Collapse,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  Button,
} from "reactstrap";
import FieldGroup from "../../../common/FieldGroup";

export default class Expenses extends Component {
  state = {
    collapse: true,
    modal: false,

    // All purpose modal values for progress bars
    modalTitle: "",
    title: "",
    desc: "",
    maxValue: "",
    addValue: "",
    subValue: "",
    curValue: "",
    errors: {},
  };

  toggleCollapse = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  toggleModal = (e) => {
    let titletxt = e.target.id;

    this.setState({
      modal: !this.state.modal,
      modalTitle: titletxt,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  mainProgressBar = { value: 50, color: "success", text: "Money Saved" };
  progressBarsValues = [
    {
      value: 10,
      color: "info",
      text: "Education",
      subtext: "How much have you saved in this category?",
    },
    {
      value: 90,
      color: "warning",
      text: "Donate",
      subtext: "How much have you saved in this category?",
    },
    {
      value: 100,
      color: "danger",
      text: "Travels",
      subtext: "How much have you saved in this category?",
    },
  ];

  render() {
    const { collapse, modal, errors, modalTitle } = this.state;
    const { value, color, text } = this.mainProgressBar;
    let collapseItems = this.progressBarsValues.map(
      ({ value, color, text, subtext }, index) => (
        <div>
          <i
            className="fas fa-edit dark float-left mt-3 mr-3 edit-icon cursor-pointer"
            id={text}
            onClick={this.toggleModal}
          ></i>
          <ProgressBar
            value={value}
            color={color}
            text={text}
            subtext={subtext}
            key={index}
          />
        </div>
      )
    );
    let editModal = (
      <Modal isOpen={modal} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>{modalTitle}</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FieldGroup
              label="Title"
              name="title"
              id="title"
              placeholder="Title of your savings goal"
              error={errors.title}
              onChange={this.onChange}
            />
            <FieldGroup
              label="Description"
              name="desc"
              id="desc"
              placeholder="Description of your savings goal"
              error={errors.desc}
              onChange={this.onChange}
            />
            <FieldGroup
              label="Total Amount"
              name="maxValue"
              id="maxValue"
              type="number"
              placeholder="Total amount you want to save"
              info="Total amount you want to save"
              error={errors.maxValue}
              onChange={this.onChange}
            />
            <FieldGroup
              label="Saved"
              name="curValue"
              id="curValue"
              type="number"
              placeholder="Amount of money you have saved so far"
              info="Amount of money you have saved so far"
              error={errors.curValue}
              onChange={this.onChange}
            />
            <FieldGroup
              label="Add Amount"
              name="addValue"
              id="addValue"
              type="number"
              placeholder="Saved some more? Add here"
              info="Saved some more? Add here"
              error={errors.addValue}
              onChange={this.onChange}
            />
            <FieldGroup
              label="Reduce Amount"
              name="subValue"
              id="subValue"
              type="number"
              placeholder="Ohno! You used up savings? Subtract here"
              info="Ohno! You used up savings? Subtract here"
              error={errors.subValue}
              onChange={this.onChange}
            />
            <Button className="bg-success mt-4" block>
              Save
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    );
    return (
      <Container className="my-3">
        <ProgressBar
          value={value}
          color={color}
          text={text}
          customClickEvent={this.toggleCollapse}
        />
        <Collapse className="w-75 m-auto" isOpen={collapse}>
          <Button
            className="my-3 bg-pink-purp"
            id="Add Category"
            onClick={this.toggleModal}
          >
            Add Category
          </Button>
          {collapseItems}
        </Collapse>
        {editModal}
      </Container>
    );
  }
}
