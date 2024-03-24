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
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Login() {

    const location = useLocation()
    const previousUrl = location.state?.previousUrl || '/';
    console.log(previousUrl);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const resetHelperForm = useRef();
    const navigage = useNavigate();

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log("Data to be sent to endpoint: ");
        console.log("Username: ", username);
        console.log("Password: ", password);

        const regex_username = /^[a-zA-Z0-9]{0,10}$/;

        if (regex_username.test(username) && password != "") {
            const jsonData = { "username": username, "password": password }
            const url = 'http://localhost:5000/authenticate';
            fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            })
                .then(response => response.json())
                //.then(data => console.log(data)) // will later be changed to actually store the received data
                .then(data => {
                    if (data) {
                        alert(data["message"]);
                        if (data["message"] == "Authentication successful") {
                            const user_id = data["user_id"];
                            // console.log("User id received is: ", user_id);
                            // Ideally they should be redirected to the landing page
                            navigate(`/App/${user_id}`);
                        }
                        // Route the user to a different page
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

            // Consider Job as well
            setUsername('');
            setPassword('');

        } else {
            alert("Check your fields.");
        }
        setPassword('');
        setUsername('');
    }

    const navigate = useNavigate();

    return (
        <Row className="rowOne">
            <Col md="auto" className="rowOneColOne">
                {/* Car Image */}
                <img className="carLogin" src={carLogin} />
            </Col>
            <Col md="auto" className="rowOneColTwo">
                <Row className="subRowOne">
                    <button href="App" className="backButton" onClick={() => navigate(-1)}>
                        <MdArrowBack />
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
                                onChange={(event) => setPassword(event.target.value)} />
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