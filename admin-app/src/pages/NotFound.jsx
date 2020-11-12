import React, { useState } from 'react';
const NotFound = (props) => {
    const buttonClickHandler = (e) => props.history.push("/");

    return (
        <div className="m-1 d-flex justify-content-center">
            <div className="f3">You are not authoritized to access this page!</div>
            <div className="">
                <button onClick={buttonClickHandler} className="btn btn-primary btn-lg">To Login</button>
            </div>
        </div>
    );
}

export default NotFound;