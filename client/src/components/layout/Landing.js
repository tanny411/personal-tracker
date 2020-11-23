import React, { Component } from "react";
import RegisterModal from "../auth/RegisterModal";
import LoginModal from "../auth/LoginModal";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
  componentDidUpdate() {
    console.log(this.props.auth);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
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
                <hr />
                <div className="d-flex flex-column align-items-center">
                  <div
                    className="w-50 mt-4 btn bg-purp-light"
                    style={{ padding: "0px" }}
                  >
                    <RegisterModal />
                  </div>
                  <div
                    className="w-50 mt-3 btn bg-purp-light"
                    style={{ padding: "0px" }}
                  >
                    <LoginModal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
