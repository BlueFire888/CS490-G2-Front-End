import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/CustomerGarage.css'
import { Card, Button, Container, Row, Col, CardTitle, CardBody, CardText, Form, FormLabel } from 'react-bootstrap'
import axios from 'axios';
import DealershipNavbar from '../components/DealershipNavbar';
import carimage from '../images/image.png';


const CustomerGarage = () => {

    const GarageCar = (props) => {
        return (
            <Card className='garage-car-card'>
                <Card.Img varient='top' src={carimage}></Card.Img>
                <CardBody>
                    <CardTitle>{props.data[2]} {props.data[3]}</CardTitle>
                    <CardText>
                        {props.data[4]}
                    </CardText>
                    <Button size='sm'>Service</Button>
                </CardBody>

            </Card>
        )
    }


    const userID = 24;
    const [cars, setCars] = useState([]);
    const [allcarMake, setallcarMake] = useState([]);
    const [allcarModel, setAllcarModel] = useState([]);
    const [allcarYear, setAllcarYear] = useState([]);
    const [carMake, setcarMake] = useState('');
    const [carModel, setcarModel] = useState('');
    const [carYear, setcarYear] = useState('');

    useEffect(() => {
        const url = "http://localhost:5000/myGarageInv";
        const jsonData = { "custID": userID }
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
                console.log(data);
                setCars(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);


    return (
        <div>
            <DealershipNavbar />
            <Container className="garage">
                <Row className='garage-cars'>
                    <Col>
                        <Container>
                            <Row>
                                {
                                    cars.myGarageInv ?
                                        cars.myGarageInv.map(
                                            (data) => (<Col className='garage-car-col'><GarageCar data={data} /></Col>)
                                        ) : null
                                }
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Form>
                            <h5 style={{ color: 'darkblue' }}>Add New Car in your Garage</h5>
                            <Form.Group>
                                <Form.Label>Car Make</Form.Label>
                                <Form.Select>
                                    <option>Select Car Make</option>
                                    <option value='1'></option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Car Model</Form.Label>
                                <Form.Select>
                                    <option>Select Car Model</option>
                                    <option value='1'></option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Car Year</Form.Label>
                                <Form.Select>
                                    <option>Select Car Year</option>
                                    <option value='1'></option>
                                </Form.Select>
                            </Form.Group>
                            <Button>Add New</Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CustomerGarage;