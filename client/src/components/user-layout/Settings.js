import React, { Component, Fragment } from "react";
import {
  Container,
  Jumbotron,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  UncontrolledCollapse,
  ListGroup,
  ListGroupItem,
  CardBody,
  Collapse,
} from "reactstrap";
import classnames from "classnames";
import FieldGroup from "../common/FieldGroup";

class SettingsPage extends Component {
  state = {
    activeTab: "1",
    errors: {},
    name: "",
    password: "",
    password2: "",
    checked: {
      todo: false,
      todoSummary: false,
      expenses: false,
      expensesSummary: false,
      water: false,
      waterSummary: false,
      household: false,
      householdSummary: false,
      health: false,
      healthSummary: false,
      time: false,
      timeSummary: false,
    },
    angleState: {
      todo: "fa fa-angle-right",
      expenses: "fa fa-angle-right",
      water: "fa fa-angle-right",
      household: "fa fa-angle-right",
      health: "fa fa-angle-right",
      time: "fa fa-angle-right",
    },
  };
  toggle = (tab) => {
    if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheck = (e) => {
    this.setState({
      checked: {
        ...this.state.checked,
        [e.target.name]: !this.state.checked[e.target.name],
      },
    });
  };
  render() {
    const { errors } = this.state;
    const navTabs = ["Account Settings", "Content Settings"];
    const summaryCheck = (name) => (
      <Fragment>
        <Input
          name={name + "Summary"}
          type="checkbox"
          onChange={this.handleCheck}
          defaultChecked={this.state.checked[name + "Summary"]}
        />{" "}
        Show this tracker in summary?
      </Fragment>
    );
    const trackers = [
      {
        text: "Todo List",
        name: "todo",
        content: <Fragment>{summaryCheck("todo")}</Fragment>,
      },
      {
        text: "Expenses",
        name: "expenses",
        content: <Fragment>{summaryCheck("expenses")}</Fragment>,
      },
      {
        text: "Drinking Water",
        name: "water",
        content: <Fragment>{summaryCheck("water")}</Fragment>,
      },
      {
        text: "Household items",
        name: "household",
        content: <Fragment>{summaryCheck("household")}</Fragment>,
      },
      {
        text: "Health",
        name: "health",
        content: <Fragment>{summaryCheck("health")}</Fragment>,
      },
      {
        text: "Time",
        name: "time",
        content: <Fragment>{summaryCheck("time")}</Fragment>,
      },
    ];
    const listContent = trackers.map(({ text, name, content }) => (
      <ListGroupItem>
        <Label check className="d-block ml-2">
          <Input
            type="checkbox"
            name={name}
            onChange={this.handleCheck}
            defaultChecked={this.state.checked[name]}
          />
          {text}{" "}
          {this.state.checked[name] ? (
            <div
              className={`bg-angle ${this.state.angleState[name]}`}
              id={name}
            ></div>
          ) : (
            " "
          )}
        </Label>
        {this.state.checked[name] ? (
          <UncontrolledCollapse
            toggler={"#" + name}
            onEntered={() =>
              this.setState({
                angleState: {
                  ...this.state.angleState,
                  [name]: "fa fa-angle-down",
                },
              })
            }
            onExited={() =>
              this.setState({
                angleState: {
                  ...this.state.angleState,
                  [name]: "fa fa-angle-right",
                },
              })
            }
          >
            <hr />
            <Container className="ml-4">{content}</Container>
          </UncontrolledCollapse>
        ) : null}
      </ListGroupItem>
    ));
    return (
      <div className="settings">
        <h1 className="display-4 mx-auto text-center my-3">Settings</h1>
        <Container>
          <Nav tabs>
            {navTabs.map((text, index) => (
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === index.toString(),
                  })}
                  onClick={() => {
                    this.toggle(index.toString());
                  }}
                >
                  {text}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={this.state.activeTab} className="mt-3">
            <TabPane tabId="0">
              <FieldGroup
                label="Name"
                name="name"
                id="name"
                placeholder="Your Full Name"
                error={errors.name}
                onChange={this.onChange}
                info="This will display only to you"
              />
              <FieldGroup
                label="Email"
                placeholder="emailfromdb@gmail.com"
                disabled="disabled"
              />
              <FieldGroup
                label="Change Password"
                name="password"
                id="password"
                placeholder="Password"
                type="password"
                error={errors.password}
              />
              <FieldGroup
                label="Confirm Password"
                name="password2"
                id="password2"
                placeholder="Confirm Password"
                type="password"
                error={errors.password2}
                onChange={this.onChange}
              />
            </TabPane>
            <TabPane tabId="1">
              <FieldGroup
                label="Add Your Goals"
                name="goal"
                id="goal"
                placeholder="Add Goal"
                info="Remind yourself everyday of things you need to focus on.
                Don't get distracted by the present, keep your aim clear!
                These will appear on your dashboard as slideshow."
                onChange={this.onChange}
              />
              <div>
                Choose what you want to track:
                <FormGroup check className="mt-2 p-0">
                  <ListGroup>{listContent}</ListGroup>
                </FormGroup>
              </div>
            </TabPane>
          </TabContent>
          <Button color="success" className="w-25 my-5 mx-auto d-block">
            Save
          </Button>
        </Container>
      </div>
    );
  }
}

export default SettingsPage;
