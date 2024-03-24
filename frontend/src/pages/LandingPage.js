import React from 'react';
import { Container , Row, Col} from 'react-bootstrap';
import '../styles/LandingPage.css'

function LandingPage(){

    return(
        <Container fluid className='landing'>
            <Row className='landing-top'>
                <Col sm={8} className='landing-top-l'></Col>
                <Col className='landing-top-r'></Col>
            </Row>
        </Container>
    );
}

export default LandingPage;