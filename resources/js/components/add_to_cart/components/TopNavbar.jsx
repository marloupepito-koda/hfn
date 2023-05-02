import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function AddToCartTopNavbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    HFN Live
                </a>

                {/* <a
                    href="ticket.html"
                    className="btn custom-btn d-lg-none ms-auto me-4"
                >
                    Buy Ticket
                </a> */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
                        <li className="nav-item">
                            <a
                                className="nav-link click-scroll"
                                href="#section_5"
                            >
                                Balance&nbsp;
                                <span className="badge bg-primary">$0.00</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link click-scroll"
                                href="#section_6"
                            >
                                Cart&nbsp;
                                <span className="badge bg-success">New</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link click-scroll"
                                href="#section_7"
                            >
                                Charge&nbsp;
                                <span className="badge bg-primary">$0.00</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default AddToCartTopNavbar;
