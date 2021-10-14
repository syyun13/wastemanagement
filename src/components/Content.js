import '../styles/Content.css'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Select from './Select';
import Roster from './Roster';

function Content(){
    const [tier1, setTier1] = useState([null, null]);
    const [tier2, setTier2] = useState([null, null]);
    const [tier3, setTier3] = useState([null, null]);
    const [page, setPage] = useState(1);

    const tier = { tier1, tier2, tier3 };
    const setTier = { setTier1, setTier2, setTier3 }

    return (
        <Container className="content">
            <Row>
                <Col xs={6} md={4}>
                    <Select tier={tier} page={page} />
                </Col>
                <Col xs={12} md={8}>
                    <Roster tier={tier} setTier={setTier} page={page} setPage={setPage} />
                </Col>
            </Row>
        </Container>
    )
}

export default Content;