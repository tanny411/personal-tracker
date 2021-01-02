import React, { Component, Fragment } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { Link } from "react-router-dom";

class Trackers extends Component {
  state = {
    dropdown: false,
  };

  toggle = () => {
    this.setState({
      dropdown: !this.state.dropdown,
    });
  };
  trackers = [
    { name: "Todo", link: "/todo" },
    { name: "Expenses", link: "/expenses" },
  ];
  render() {
    const { dropdown } = this.state;
    const dropdownItems = this.trackers.map(({ name, link }, key) => (
      <DropdownItem key={key}>
        <Link to={link} className="purp-darker">
          {name}
        </Link>
      </DropdownItem>
    ));
    return (
      <Fragment>
        <Dropdown isOpen={dropdown} toggle={this.toggle}>
          <DropdownToggle nav caret>
            Trackers
          </DropdownToggle>
          <DropdownMenu>{dropdownItems}</DropdownMenu>
        </Dropdown>
      </Fragment>
    );
  }
}

export default Trackers;
