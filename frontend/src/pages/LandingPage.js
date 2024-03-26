import React from 'react';
import { Container , Row, Col, Button} from 'react-bootstrap';
import '../styles/LandingPage.css'
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
                    <Row>
                        <Col className='explore-skyline-statement'>
                        A great dealership experience at convenience from your house
                        </Col>
                    </Row>
                    <Row>
                        <Col className='explore-button-area'>
                        <Button className='explore-button' href="/">Explore</Button>
                        </Col>
                    </Row>
                </Container>
                <Col xs={4} className='landing-top-r'><Button className='top-r-button' href="/SignUp">Sign Up</Button></Col>
            </Row>
        </Container>
        <Container fluid >
            <Row>
                <Col  style={{textAlign:'center', color: '#2148C0', paddingTop:'3vh', paddingBottom:'5vh'}}>
                 Our Featured Car
                </Col>
            </Row>
            <Row className='landing-mid-feature'>
                <Col style={{textAlign:'right', fontSize: '14px', alignContent:'center', paddingLeft:'10%'}}>
                Ready? Explore our website to find out amazing car models like this one. Immerse yourself into the cars world!.
                <Button variant='link' style={{fontSize: '12px'}}> Learn More </Button>
                </Col>
                <Col style={{paddingLeft:'5%'}}><div  className='landing-mid-img'/>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default LandingPage;