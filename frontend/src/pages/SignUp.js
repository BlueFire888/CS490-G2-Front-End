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
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
// Added by me

// End added by me

function SignUp() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [job, setJob] = useState('');
    const [phone, setPhone] = useState('');

    const resetHelperForm = useRef();
    const navigate = useNavigate();

    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        console.log("Data to be sent to endpoint: ");
        console.log("Username: ", username);
        console.log("First: ", firstName);
        console.log("Last: ", lastName);
        console.log("Email: ", email);
        console.log("New Pswd: ", newPassword);
        console.log("Confirmed Password: ", confirmPwd);
        console.log("Job: ", job);
        console.log("Phone: ", phone);
        // Check if username is valid: number of characters=? allowed
        const regex_username = /^[a-zA-Z0-9]{0,10}$/;
        const regex_name = /^[a-zA-Z]+$/;
        const regex_email = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,4}$/;
        const regex_phone = /^[0-9]{10}$/;
        if (
            regex_username.test(username)
            &&
            regex_name.test(firstName)
            && regex_name.test(lastName)
            && regex_email.test(email)
            && (confirmPwd == newPassword)
            && (job != "")
            && regex_phone.test(phone)
        ) {
            console.log("All good");
            // var username = username;
            const jsonData = {
                "username": username, "first_name": firstName, "last_name": lastName,
                "email": email, "phone_number": phone, "job": job, "password": newPassword
            }
            const url = 'http://localhost:5000/addUser';
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
                        // Route the user to a different page
                        if (data["message"] == "User added successfully") {
                            const user_id = data["user_id"];
                            console.log("User id received is: ", user_id);
                            navigate(`/App/${user_id}`);
                        }
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

            // Consider Job as well
            setUsername('');
            setFirstName('');
            setLastName('');
            setEmail('');
            setNewPassword('');
            setConfirmPwd('');
            setJob('');
            setPhone('');

        } else {
            alert("Check your fields");
        }
        // Check if first name & last name are letters
        // Check if email is valid
        // Check is new password matches confirmed passwd
        // Checks if phone has 8-10 digits
    }

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
                    <Form onSubmit={handleSignUpSubmit}>

                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="USERNAME" value={username}
                                onChange={(event) => { setUsername(event.target.value); console.log(username) }} />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="FIRST NAME" value={firstName}
                                onChange={(event) => setFirstName(event.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="LAST NAME" value={lastName}
                                onChange={(event) => setLastName(event.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="EMAIL" value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="NEW PASSWORD" type="password" value={newPassword}
                                onChange={(event) => setNewPassword(event.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="CONFIRM PASSWORD" type="password" value={confirmPwd}
                                onChange={(event) => setConfirmPwd(event.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">

                            <Form.Select aria-label="Default select example" className="selectStmt" onChange={(event) => { setJob(event.target.value); console.log(job) }}>
                                <option value="">SELECT JOB</option>
                                <option value="Customer">Customer</option>
                                <option value="Technician">Technician</option>
                                <option value="Manager">Manager</option>
                                <option value="Admin">Administrator</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Control className="inputBar" placeholder="PHONE" value={phone}
                                onChange={(event) => setPhone(event.target.value)} />
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