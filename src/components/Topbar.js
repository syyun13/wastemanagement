import '../styles/Topbar.css';
import React, { useState } from 'react';
import { Navbar, Container, Button, Modal } from 'react-bootstrap';

function Topbar(){
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const openModal = () => setShow(true);

    return (
        <Navbar>
            <Container>
            <Navbar.Brand id="title">
                <img
                alt=""
                src="/wm.png"
                width="90"
                height="116"
                className="d-inline-block"
                />{' '}
                CHALLENGE
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Button id="playButton" variant="light" onClick={openModal}>
                    How To Play
                </Button>
            </Navbar.Collapse>
            <Modal show={show} onHide={closeModal} centered>
                <Modal.Body>
                    <h2>You can earn up to three additional roster spots by posting about the WMPO on social media. Here is how:</h2>
                    <p>1. Share the WMPO promo graphic and recommended caption you received through the WM Minute on your social media, then copy-paste the link to your post below.</p>
                    <p>2. Repost anything WMPO-related from WM's Twitter, Instagram or Facebook on your social media, then copy-paste the link to your post below.</p>
                    <p>3. Share show you recycle right at work or at home on your social media, then copy-paste the link to your post below</p>
                    <p>Note: You can post any combination of the following actions three times to unclock your additional roster.</p>
                    <Button variant="flat" onClick={closeModal}>
                        CLOSE
                    </Button>
                </Modal.Body>
            </Modal>
            </Container>
        </Navbar>
    )
}

export default Topbar;