import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AuthService from "../services/AuthService";
const Login = (props) => {

    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [buttonColor, setButtonColor] = useState("primary");

    const usernameInputHandler = (e) => setUsernameInput(e.target.value);
    const passwordInputHandler = (e) => setPasswordInput(e.target.value);
    const buttonClickHandler = (e) => {
        e.preventDefault();
        AuthService.login(usernameInput, passwordInput)
            .then(response => {
                console.log(response.data)
                if (response.status === 200) {
                    let token = JSON.stringify(response.data);
                    localStorage.setItem("userToken", token)
                    console.log(JSON.parse(localStorage.getItem('userToken')))
                    props.history.push('/dashboard');
                }
            })
            .catch(error => {
                setErrorMessage("WRONG CREDENTIALS");
                setButtonColor("danger");
                setTimeout(() => {
                    setErrorMessage("");
                    setButtonColor("primary");
                }, 2500);
            })

    }

    return (
        <div className="m-1 d-flex justify-content-center">
            <Form className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 text-center mt-5 mr-auto">

                <div className="text-center mb-2 dark-red i b">{errorMessage}</div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="username"
                        placeholder="Type your username here"
                        value={usernameInput}
                        onChange={usernameInputHandler} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Type your password here"
                        value={passwordInput}
                        onChange={passwordInputHandler} />
                </Form.Group>
                <Button
                    variant={buttonColor}
                    type="submit"
                    onClick={buttonClickHandler}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;