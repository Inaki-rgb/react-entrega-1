import React from "react";
import wizard_tower from "../assets/wizard_tower.png";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <img src={wizard_tower} alt="" width="80" height="80"/>
                    <Navbar.Brand href="#">Wizard's Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <Nav.Link href="#action1">Magic:The Gathering</Nav.Link>
                        <Nav.Link href="#action2">Suplementos</Nav.Link>
                        <Nav.Link href="#action3">Contactanos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <ShoppingCartCheckoutIcon fontSize="large" color="primary"/>
                    </Container>
            </Navbar>
        </div>
    )
}

export default Header