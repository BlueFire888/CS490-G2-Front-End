import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DealershipNavBar from '../components/DealershipNavbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/CustomerPurchaseHistory.css';
import Table from 'react-bootstrap/Table';

function CustomerPurchaseHistory() {
    // Obtain the user_id
    const sample_user_id = 12;
    const [carSales, setCarSales] = useState([]);
    const [productSales, setProductSales] = useState([]);

    useEffect(() => {
        // For productPurchaseHistory
        const jsonData2 = { "userID": sample_user_id }
        const url2 = 'http://localhost:5000/productPurchaseHistory';
        fetch(url2, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData2),
        })
            .then(response => response.json())
            //.then(data => console.log(data)) // will later be changed to actually store the received data
            .then(data => {
                if (data) {
                    setProductSales(data["productPurchaseHistory"]);
                    console.log(data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        // For carPurchaseHistory
        const jsonData = { "userID": sample_user_id }
        const url = 'http://localhost:5000/carPurchaseHistory';
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
                    setCarSales(data["carPurchaseHistory"]);
                    console.log(data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <DealershipNavBar />
            <Row className="crowOne">
                <Col className="crowOneColOne">
                    CAR SALES
                    <div>
                        <Table striped bordered hover variant="light">

                            <thead>
                                <tr>
                                    <th>Car Make</th>
                                    <th>Car Model</th>
                                    <th>Car Year</th>
                                    <th>Vin Number</th>
                                    <th>Insert Date</th>
                                    <th>Negotiation Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carSales.map(item => {
                                    return (
                                        <tr key={item.c_vin}>
                                            <td >{item.c_make}</td>
                                            <td >{item.c_model}</td>
                                            <td >{item.c_year}</td>
                                            <td >{item.c_vin}</td>
                                            <td >{item.insert_date}</td>
                                            <td >{item.negotiation_price}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
            <Row className="crowTwo">
                <Col className="crowTwoColOne">
                    PRODUCT SALES
                    <div>
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Description</th>
                                    <th>Insert Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productSales.map(item => {
                                    return (
                                        <tr>
                                            <td >{item.p_name}</td>
                                            <td >{item.p_price}</td>
                                            <td >{item.p_description}</td>
                                            <td >{item.insert_date}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CustomerPurchaseHistory;