import React from 'react'

const RegisterLoginFooter = () => {
    return (
        <>
            <footer className="py-5" id="footer-main">
                <div className="container">
                    <div className="row align-items-center justify-content-xl-between">
                        <div className="col-xl-6">
                            <div className="copyright text-center text-xl-left text-muted">
                                &copy; 2020 <a href="#" className="font-weight-bold ml-1" target="_blank">Condo Security</a>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                                <li className="nav-item">
                                    <a href="#" className="nav-link" target="_blank">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" target="_blank">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" target="_blank">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" target="_blank">Get A Quote</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default RegisterLoginFooter
