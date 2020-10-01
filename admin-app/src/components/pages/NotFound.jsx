import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
const NotFound = (props) => {
    const buttonClickHandler = (e) => props.history.push("/");

    return (
        <div className="m-1 d-flex justify-content-center">
            <div className="f3">You are not authoritized to access this page!</div>
            <div className="">
                <Button
                    variant="primary"
                    type="submit"
                    onClick={buttonClickHandler}
                >
                    to Login
            </Button>
            </div>
        </div>
    );
}

export default NotFound;