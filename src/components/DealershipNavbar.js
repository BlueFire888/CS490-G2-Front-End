
import React, {useState} from 'react';
import '../styles/DealershipNavbar.css';
import { SideNav } from './SideNav';
import { HiBars3 } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Button} from "react-bootstrap";
import {Container, Row, Col} from 'react-bootstrap';
// Added by me

// End added by me

function DealershipNavbar() {
const [sidebar, setSidebar] = useState(false)

const showSidebar = () => setSidebar(!sidebar)

    return (
        <div>
          <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet'></link>
                    {/*Navbar start, div with class name Navbar is used for navbar only*/}
            <Container fluid className='navbar'>
              <Row fluid className='navbar-content' >
                <Col className='navbar-content-sidenav' md='auto' >
                  {sidebar ? <IoCloseOutline onClick={showSidebar}/> :  <HiBars3 onClick={showSidebar}/> }
                </Col>
                <Col className='navbar-content-statement' xs='auto' >Welcome</Col>
                <Col className='navbar-content-userlogo' xs='auto' > <FaRegUser /></Col>
                <Col className='navbar-content-seperator' />
                <Col className='navbar-content-button' xs='auto'>
                  <Button size='sm' href="/Login">Login</Button>
                </Col>              
              </Row>
            </Container>

          {/*Side nav start, classname changes from nav-menu o nav-menu-active when bars are clicked*/}
          <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='close-sidenav' onClick={showSidebar}>close <IoCloseOutline/></li>
                {SideNav.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                                <div className='nav-icons'>{item.icon}</div>
                                <Button  className="sidenavButtons" href={item.path}>{item.title}</Button>
                        </li>
                    )
                })}
            </ul>
          </nav>
          </div>
    )
}

export default DealershipNavbar;