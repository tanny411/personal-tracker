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
  Form,
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
    goals: [
      { goal: "Aysha", desc: "Its a goal I have of my life lol!" },
      { goal: "Kamal", desc: "Its a goal I have of my life lol!" },
      { goal: "Tanny", desc: "Its a goal I have of my life lol!" },
      { goal: "Sshit", desc: "Its a goal I have of my life lol!" },
      { goal: "Ggoat", desc: "Its a goal I have of my life lol!" },
      { goal: "Rreal", desc: "Its a goal I have of my life lol!" },
    ],
    checked: {
      todo: false,
      todoSummary: false,
      todoProgress: false,
      expenses: false,
      expensesSummary: false,
      expensesProgress: false,
      water: false,
      waterSummary: false,
      waterProgress: false,
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
  addGoal = (e) => {
    e.preventDefault();
  };
  render() {
    const { errors } = this.state;
    const navTabs = ["Account Settings", "Content Settings"];
    const summaryCheck = (name) => (
      <div>
        <Input
          name={name + "Summary"}
          type="checkbox"
          onChange={this.handleCheck}
          defaultChecked={this.state.checked[name + "Summary"]}
        />{" "}
        Show this tracker in summary?
      </div>
    );
    const progressCheck = (name) => (
      <div>
        <Input
          name={name + "Progress"}
          type="checkbox"
          onChange={this.handleCheck}
          defaultChecked={this.state.checked[name + "Progress"]}
        />{" "}
        Show progress in summary?
      </div>
    );
    const trackers = [
      {
        text: "Todo List",
        name: "todo",
        content: (
          <Fragment>
            {summaryCheck("todo")}
            {progressCheck("todo")}
          </Fragment>
        ),
      },
      {
        text: "Expenses",
        name: "expenses",
        content: (
          <Fragment>
            {summaryCheck("expenses")}
            {progressCheck("expenses")}
          </Fragment>
        ),
      },
      {
        text: "Drinking Water",
        name: "water",
        content: (
          <Fragment>
            {summaryCheck("water")}
            {progressCheck("water")}
          </Fragment>
        ),
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
              <Form onSubmit={this.addGoal} className="bg-light p-4">
                <FieldGroup
                  label="Add New Goal"
                  name="goal"
                  id="goal"
                  placeholder="Add Goal..."
                  info="Remind yourself everyday of things you need to focus on.
                Don't get distracted by the present, keep your aim clear!
                These will appear on your dashboard as slideshow."
                  onChange={this.onChange}
                />
                <FieldGroup
                  label="Add Goal Description"
                  name="goalDesc"
                  id="goalDesc"
                  placeholder="Describe your goal..."
                  info="Elaborate your goal a bit. 
                  These will appear on your dashboard as slideshow subtext."
                  onChange={this.onChange}
                />
                <Button className="w-25 bg-pink-purp opacity-2">
                  Add Goal
                </Button>
              </Form>
              <div className="goals-content mt-3">
                Your Goals:
                <ListGroup className="mt-2">
                  {this.state.goals.map(({ goal, desc }) => (
                    <ListGroupItem>
                      <div className="float-left">
                        {goal}
                        <small className="d-block">{desc}</small>
                      </div>
                      <Button className="float-right" color="danger" size="sm">
                        <i className="fa fa-times"></i>
                      </Button>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
              <div className="tracker-settings mt-3">
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
