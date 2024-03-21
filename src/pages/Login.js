import React, { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Login.css';
import carLogin from "../images/login_car.jpg";
import backButton from "../images/backButton.jpg";
import logo from "../images/logo.jpg";
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const resetHelperForm = useRef();

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log("Data to be sent to endpoint: ");
        console.log("Username: ", username);
        console.log("Password: ", password);
        setPassword('');
        setUsername('');
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
                    <MdArrowBack/>
                    </button>
                </Row>
                <Row className="subRowTwo">
                    <div className="divSubRowTwo">
                        <img className="logo" src={logo} />
                    </div>
                </Row>
                <Row className="subRowThree">
                    <Form onSubmit={handleLoginSubmit}>
                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="USERNAME" value={username}
                                onChange={(event) => setUsername(event.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="PASSWORD" type="password" value={password}
                            onChange={(event) => setPassword(event.target.value)}/>
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <p>Don't have an account? <Link to="/SignUp">Sign In</Link></p>
                            <Button variant="primary" type="submit" className="login">
                                LOGIN
                            </Button>
                        </Form.Group>
                    </Form>
                </Row>
            </Col >
        </Row >
    )
}

export default Login;