import React from 'react';

export default () => {
    return (
        <footer className="bg-purp-dark text-white pt-4 text-center small">
            <div className="container text-md-left">
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <h6 className="text-uppercase font-weight-bold">Personal Tracker</h6>
                        <hr className="bg-purp-lightest mb-2 mt-0 d-inline-block mx-auto" style={{width: "170px", height: "2px"}}/>
                        <p className="mt-2">
                            Personal Tracker is your go to companion to help declutter your life and make management easier.
                            Track every aspect of your life, from expenses, savings and groceries, to your habits, health and exercise routines.
                        </p>
                    </div>
                    <div className="col-md-3 mb-2 text-center">
                        <h6 className="text-uppercase font-weight-bold">Developer</h6>
                        <hr className="bg-purp-lightest mb-2 mt-0 d-inline-block mx-auto" style={{width: "100px", height: "2px"}}/>
                        <ul className="list-unstyled text-center">
                            <li className="">React-Redux</li>
                            <li className="">Express</li>
                            <li className="">NodeJS</li>
                            <li className="">MongoDB</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-2 text-center">
                        <h6 className="text-uppercase font-weight-bold">Find me</h6>
                        <hr className="bg-purp-lightest mb-2 mt-0 d-inline-block mx-auto" style={{width: "75px", height: "2px"}}/>
                        <div className="list-unstyled text-center mt-4">
                            <a href="https://github.com/tanny411">
                                <i className="fab fa-github text-white mr-4 fa-lg"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/tanny411/">
                                <i className="fab fa-linkedin-in text-white mr-4 fa-lg"></i>
                            </a>
                            <a href="https://tanny411.github.io/">
                                <i className="fas fa-poo text-white mr-4 fa-lg"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCbT2Y0Kcy882q47P_Nl0vIA">
                                <i className="fab fa-youtube text-white mr-4 fa-lg"></i>
                            </a>
                            <a href="https://twitter.com/AishaKh13954163">
                                <i className="fab fa-twitter text-white fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-purp-darker p-2">
                Copyright &copy; {new Date().getFullYear()} Personal Tracker
            </div>
        </footer>
    )
}