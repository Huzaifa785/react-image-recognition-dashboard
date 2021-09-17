import React from 'react';
import {Link} from 'react-router-dom';

const RegisterLoginNavbar = () => {
    return (
        <>
            <nav id="navbar-main" className="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
                <div className="container">
                    <a href="#">
                        <h2 className="text-white mt-1 mr-5">Condo Security</h2>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="dashboard.html">
                                        <img src="../assets/img/brand/blue.png" />
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <span className="nav-link-inner--text">Login</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">
                                    <span className="nav-link-inner--text">Register</span>
                                </Link>
                            </li>
                        </ul>
                        <hr className="d-lg-none" />
                        <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="#" target="_blank" data-toggle="tooltip" data-original-title="Like us on Facebook">
                                    <i className="fab fa-facebook-square"></i>
                                    <span className="nav-link-inner--text d-lg-none">Facebook</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="#" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Instagram">
                                    <i className="fab fa-instagram"></i>
                                    <span className="nav-link-inner--text d-lg-none">Instagram</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="#" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Twitter">
                                    <i className="fab fa-twitter-square"></i>
                                    <span className="nav-link-inner--text d-lg-none">Twitter</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="#" target="_blank" data-toggle="tooltip" data-original-title="Star us on Github">
                                    <i className="fab fa-github"></i>
                                    <span className="nav-link-inner--text d-lg-none">Github</span>
                                </a>
                            </li>
                            {/* <li className="nav-item d-none d-lg-block ml-lg-4">
                                <a href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=ad_upgrade_pro" target="_blank" className="btn btn-neutral btn-icon">
                                    <span className="btn-inner--icon">
                                        <i className="fas fa-shopping-cart mr-2"></i>
                                    </span>
                                    <span className="nav-link-inner--text">Upgrade to PRO</span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default RegisterLoginNavbar
