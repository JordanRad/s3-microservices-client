import React, { useState } from 'react';
import AuthService from "../services/AuthService";
const Navigation = (props) => {
    const buttonClickHandler = (e) => {
        e.preventDefault();
        AuthService.logout()
    };
    // const usersLinkRedirect = (e) => props.history.push("/users");
    // const productsLinkRedirect = (e) => props.history.push("/products");
    // const ordersLinkRedirect = (e) => props.history.push("/orders");
    return (
        <nav className="col-12 m-0 bg-black navbar navbar-expand-lg ">
            <div className="navbar-brand text-white" href="#">Management Application Admin</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <a className="light-blue nav-link" href="#">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="light-blue nav-link" href="#">Orders</a>
                    </li>
                    <li className="nav-item">
                        <a className="light-blue nav-link" href="#">Products</a>
                    </li>
                </ul>

                <button
                    onClick={buttonClickHandler}
                    className="btn light-blue my-2 my-sm-0"
                    type="submit">Logout
                </button>
            </div>
        </nav>
    );
}

export default Navigation;