import React, { Component } from "react";
import RegisterModal from "../auth/RegisterModal";
import LoginModal from "../auth/LoginModal";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Personal Tracker</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  possimus dignissimos veritatis quidem minima, rerum,
                  laudantium minus architecto ea perferendis optio officia ab
                  atque suscipit mollitia recusandae dolorum eligendi explicabo.
                </p>
                <hr/>
                <div className="btn bg-purp-light w-25">
                    <RegisterModal/>
                </div>
                <div className="btn bg-purp-light w-25 ml-5">
                    <LoginModal/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;