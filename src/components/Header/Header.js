import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
      <>
        <nav className="navbar navbar-expand-xl">
                <div className="container h-100">
                    <Link to="/" className="navbar-brand">
                        <h1 className="tm-site-title mb-0">Product Admin</h1>
                    </Link>
                    <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars tm-nav-icon"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto h-100">
                            <li className={splitLocation[1] === "dashboard" ? `${styles.active}` : ""}>
                                <Link className="nav-link" to={JSON.parse(localStorage.getItem("loginStatus")) === true? "/dashboard": "/"}>
                                    <i className="fas fa-tachometer-alt"></i> Dashboard
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className={splitLocation[1] === "products" ? `${styles.active}` : ""}>
                                <Link className="nav-link" to={JSON.parse(localStorage.getItem("loginStatus")) === true? "/products": "/"}>
                                    <i className="fas fa-shopping-cart"></i> Products
                                </Link>
                            </li>

                            <li className={splitLocation[1] === "account" ? `${styles.active}` : ""}>
                                <Link className="nav-link" to={JSON.parse(localStorage.getItem("loginStatus")) === true? "/account": "/"}>
                                    <i className="far fa-user"></i> Accounts
                                </Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                {JSON.parse(localStorage.getItem("loginStatus")) === true && (
                                    <Link class="nav-link d-block" to="/" onClick={() => localStorage.setItem("loginStatus", false)}>Admin, <b>Logout</b></Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
      </>
    );
  };
  
  export default Header;