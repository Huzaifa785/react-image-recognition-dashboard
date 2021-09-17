import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
                <div className="scrollbar-inner">

                    <div className="sidenav-header  align-items-center">
                        <Link className="navbar-brand" to="/condo-owner-dashboard">
                            {/* <img src="assets/img/brand/blue.png" className="navbar-brand-img" alt="..." /> */}
                            <h1 className="text-primary">Condo</h1>
                        </Link>
                    </div>
                    <div className="navbar-inner">

                        <div className="collapse navbar-collapse" id="sidenav-collapse-main">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/condo-owner-dashboard">
                                        <i className="ni ni-tv-2 text-primary"></i>
                                        <span className="nav-link-text">Dashboard</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="ni ni-circle-08 text-orange"></i>
                                        <span className="nav-link-text">Tenants</span>
                                        <span className="badge bg-orange ml-2 text-white">45</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="ni ni-mobile-button text-primary"></i>
                                        <span className="nav-link-text">Calls</span>
                                        <span className="badge bg-primary ml-2 text-white">30</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="ni ni-lock-circle-open text-yellow"></i>
                                        <span className="nav-link-text">Door Releases</span>
                                        <span className="badge bg-yellow ml-2 text-white">30</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add-unit">
                                        <i className="ni ni-fat-add text-orange"></i>
                                        <span className="nav-link-text">Add Unit</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/units">
                                        <i className="ni ni-building text-default"></i>
                                        <span className="nav-link-text">Units</span>
                                        {/* <span className="badge bg-default ml-2 text-white">40</span> */}
                                    </Link>
                                </li>
                            </ul>

                            {/* <hr className="my-3" />
          
          <h6 className="navbar-heading p-0 text-muted">
            <span className="docs-normal">Documentation</span>
          </h6>
          
          <ul className="navbar-nav mb-md-3">
            <li className="nav-item">
              <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html" target="_blank">
                <i className="ni ni-spaceship"></i>
                <span className="nav-link-text">Getting started</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html" target="_blank">
                <i className="ni ni-palette"></i>
                <span className="nav-link-text">Foundation</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html" target="_blank">
                <i className="ni ni-ui-04"></i>
                <span className="nav-link-text">Components</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/plugins/charts.html" target="_blank">
                <i className="ni ni-chart-pie-35"></i>
                <span className="nav-link-text">Plugins</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active active-pro" href="examples/upgrade.html">
                <i className="ni ni-send text-dark"></i>
                <span className="nav-link-text">Upgrade to PRO</span>
              </a>
            </li>
          </ul> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar
