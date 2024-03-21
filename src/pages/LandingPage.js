import React from 'react';
import { Container , Row, Col} from 'react-bootstrap';
import '../styles/LandingPage.css'
import landingcar from '../images/landing-page-img.jpg'
function LandingPage(){

    return(
        <div>
                      <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet'></link>

        <Container fluid className='landing'>
            <Row className='landing-top'>
                <Col xs={8} className='landing-top-l'></Col>
                <div className='landing-top-photo'></div>
                <Container className='landing-top-explore'>
                    <Row>
                        <Col className='explore-skyline'>
                            Skyline Dealership
                        </Col>
                    </Row>
                </Container>
                <Col xs={4} className='landing-top-r'></Col>
            </Row>
        </Container>
   

        </div>
    );
}

export default LandingPage;