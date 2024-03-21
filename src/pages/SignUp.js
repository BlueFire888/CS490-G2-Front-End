import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/SignUp.css';
import carLogin from "../images/login_car.jpg";
import backButton from "../images/backButton.jpg";
import logo from "../images/logo.jpg";
import { Link } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const resetHelperForm = useRef();

    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        console.log("Data to be sent to endpoint: ");
        console.log("Username: ", username);
        console.log("Email: ", email);
        console.log("Confirmed Password: ", confirmPwd);
        console.log("New Password: ", newPassword);
        setUsername('');
        setEmail('');
        setNewPassword('');
        setConfirmPwd('');
        
    }

    return (
        <Row className="rowOne">
            <Col md="auto" className="rowOneColOne">
                {/* Car Image */}
                <img className="carLogin" src={carLogin} />
            </Col>
            <Col md="auto" className="rowOneColTwo">
                <Row className="subRowOne">
                    <button href="App" className="backButton">
                        <img className="imageBack" src={backButton} />
                    </button>
                </Row>
                <Row className="subRowTwo">
                    <div className="divSubRowTwo">
                        <img className="logo" src={logo} />
                    </div>
                </Row>
                <Row className="subRowThree">
                    <Form onSubmit={handleSignUpSubmit}>
                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="USERNAME" value={username}
                                onChange={(event) => setUsername(event.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="EMAIL" value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="NEW PASSWORD" type="password" value={newPassword}
                            onChange={(event) => setNewPassword(event.target.value)}/>
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="CONFIRM PASSWORD" type="password" value={confirmPwd}
                            onChange={(event) => setConfirmPwd(event.target.value)}/>
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Button variant="primary" type="submit" className="signUp">
                                SIGN UP
                            </Button>
                        </Form.Group>
                    </Form>
                </Row>
            </Col >
        </Row >
    )
}

export default SignUp;