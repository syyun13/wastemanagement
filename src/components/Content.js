import '../styles/Content.css'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Select from './Select';
import Roster from './Roster';

function Content(){
    return (
        <Container className="content">
            <Row>
                <Col xs={6} md={4}>
                    <Select />
                </Col>
                <Col xs={12} md={8}>
                    <Roster />
                </Col>
            </Row>
        </Container>
    )
}

export default Content;