import React, { useState, useEffect, useRef, useId } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DealershipNavBar from '../components/DealershipNavbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoConstructOutline } from 'react-icons/io5';
import '../styles/UserProfileMgmt.css';

function UserProfileMgmt() {

    // Obtain the user_id
    const sample_user_id = 12;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmitUpdate = (event) => {
        event.preventDefault();
        const regex_name = /^[a-zA-Z]+$/;
        const regex_email = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,4}$/;
        const regex_phone = /^[0-9]{10}$/;
        if (regex_name.test(firstName) && regex_name.test(lastName) &&
            regex_email.test(email) && regex_phone.test(phone)) {
            const jsonData = {
                "userID": sample_user_id, "firstName": firstName, "lastName": lastName,
                "email": email, "phoneNumber": phone
            }
            const url = 'http://localhost:5000/updateUserInfo';
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
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            alert("Check your fields.");
        }
    }
    return (
        <div>
            <DealershipNavBar />
            <Row className="profileRow">
                <Col></Col>
                <Col className="middleCol">
                    
                    <Form onSubmit={handleSubmitUpdate}>
                        <Form.Group as={Col} className="textBar">
                            <Form.Label>FIRST NAME</Form.Label>
                            <Form.Control className="inputBar" placeholder="FIRST NAME" type="text"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Label>LAST NAME</Form.Label>
                            <Form.Control className="inputBar" placeholder="LAST NAME" type="text"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control className="inputBar" placeholder="EMAIL" type="text"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Form.Label>PHONE</Form.Label>
                            <Form.Control className="inputBar" placeholder="PHONE" type="text"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="textBar">
                            <Button variant="primary" type="submit" className="updateButton">
                                UPDATE
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default UserProfileMgmt;