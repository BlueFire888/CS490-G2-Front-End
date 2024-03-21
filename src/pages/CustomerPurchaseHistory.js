import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DealershipNavBar from '../components/DealershipNavbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import '../styles/CustomerPurchaseHistory.css';
import Table from 'react-bootstrap/Table';

function CustomerPurchaseHistory() {
    return (

        <div>
            <DealershipNavBar />
            <Row className="rowOne">
                <Col className="rowOneColOne">
                    CAR SALES
                    <div>
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
            <Row className="rowTwo">
                <Col className="rowTwoColOne">
                    PRODUCT SALES
                    <div>
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CustomerPurchaseHistory;