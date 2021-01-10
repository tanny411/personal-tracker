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

export default class SavingProgress extends Component {
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

    progressBarsValues: [
      {
        maxValue: 1000,
        curValue: 400,
        value: 10,
        color: "info",
        text: "Education",
        desc: "How much have you saved in this category?",
      },
      {
        maxValue: 2000,
        curValue: 500,
        value: 90,
        color: "warning",
        text: "Donate",
        desc: "How much have you saved in this category?",
      },
      {
        maxValue: 3000,
        curValue: 600,
        value: 100,
        color: "danger",
        text: "Travels",
        desc: "How much have you saved in this category?",
      },
    ],
  };

  toggleCollapse = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  toggleModal = (e) => {
    let modalTitle = "";
    let title = "";
    let maxValue = "";
    let curValue = "";
    let desc = "";

    // To set values only when modal is being 'opened'
    if (e.target.id) {
      modalTitle = e.target.id;
      if (modalTitle !== "Add Category") {
        let item = this.state.progressBarsValues[modalTitle];
        modalTitle = item.text;
        title = item.text;
        maxValue = item.maxValue;
        curValue = item.curValue;
        desc = item.desc;
      }
    }

    this.setState({
      modal: !this.state.modal,
      modalTitle,
      title,
      desc,
      curValue,
      maxValue,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  mainProgressBar = { value: 50, color: "success", text: "Money Saved" };

  render() {
    const {
      collapse,
      modal,
      errors,
      modalTitle,
      progressBarsValues,
    } = this.state;
    const { value, color, text } = this.mainProgressBar;
    let collapseItems = progressBarsValues.map(
      ({ value, color, text, desc }, index) => (
        <div>
          <i
            className="fas fa-edit dark float-left mt-3 mr-3 edit-icon cursor-pointer"
            id={index}
            onClick={this.toggleModal}
          ></i>
          <ProgressBar
            value={value}
            color={color}
            text={text}
            subtext={desc}
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
              value={this.state.title}
              info="Title of your savings goal"
              error={errors.title}
              onChange={this.onChange}
            />
            <FieldGroup
              label="Description"
              name="desc"
              id="desc"
              value={this.state.desc}
              info="Description of your savings goal"
              error={errors.desc}
              onChange={this.onChange}
            />
            <FieldGroup
              label="Total Amount"
              name="maxValue"
              id="maxValue"
              value={this.state.maxValue}
              type="number"
              info="Total amount you want to save"
              error={errors.maxValue}
              onChange={this.onChange}
            />
            <FieldGroup
              label="Saved"
              name="curValue"
              id="curValue"
              value={this.state.curValue}
              type="number"
              info="Amount of money you have saved so far"
              error={errors.curValue}
              onChange={this.onChange}
              disabled={modalTitle !== "Add Category" ? "disabled" : ""}
            />
            {modalTitle !== "Add Category" ? (
              <Fragment>
                <FieldGroup
                  label="Add Amount"
                  name="addValue"
                  id="addValue"
                  type="number"
                  placeholder="Saved some more? Add here"
                  error={errors.addValue}
                  onChange={this.onChange}
                />
                <FieldGroup
                  label="Reduce Amount"
                  name="subValue"
                  id="subValue"
                  type="number"
                  placeholder="Ohno! You used up savings? Subtract here"
                  error={errors.subValue}
                  onChange={this.onChange}
                />
              </Fragment>
            ) : null}
            <Button className="bg-success mt-4" block>
              Save
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    );
    return (
      <Container className="my-3">
        <h1 className="cursive">Progress on your savings</h1>
        <ProgressBar
          value={value}
          color={color}
          text={text}
          customClickEvent={this.toggleCollapse}
        />
        <Collapse className="w-75 m-auto" isOpen={collapse}>
          <hr style={{ borderTopWidth: "2px" }} />
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
