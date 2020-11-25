import React, { Component, Fragment } from "react";
import Cards from './Cards';
import CarouselComponent from './CarouselComponent';
import ProgressComponent from './ProgressComponent';
import Summary from './Summary';

class UserLanding extends Component {
  render() {
    return (
      <Fragment>
        <CarouselComponent/>
        <ProgressComponent/>
        <Summary/>
        <Cards/>
      </Fragment>
    );
  }
}

export default UserLanding;
