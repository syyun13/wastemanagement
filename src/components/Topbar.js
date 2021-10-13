import '../styles/Topbar.css';
import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

function Topbar(){
    return (
        <Navbar>
            <Container>
            <Navbar.Brand id="title">
                <img
                alt=""
                src="/wmlogo.png"
                width="110"
                height="130"
                className="d-inline-block"
                />{' '}
                CHALLENGE
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Button id="playButton" variant="light">How To Play</Button>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Topbar;