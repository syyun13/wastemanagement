import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Select(){
    return (
        <Container>
            <div id="seven">7</div>
            <div className="text">
                <p>You already have Charley on your team, and you have earned six additional roster spots. <br/> Tap on a player to select them.</p>
            </div>
            <div className="list">
                <Row>
                    <Col>
                        <Button variant="flat">
                            Tier 1 Player 1
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="flat">
                            Tier 1 Player 2
                        </Button>
                    </Col>
                    <Col>
                        <p className="arrow">⇐</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="flat">
                            Tier 2 Player 1
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="flat">
                            Tier 2 Player 2
                        </Button>
                    </Col>
                    <Col>
                        <p className="arrow">⇐</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="flat">
                            Tier 3 Player 1
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="flat">
                            Tier 3 Player 2
                        </Button>
                    </Col>
                    <Col>
                        <p className="arrow">⇐</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <Button className="btn-success" variant="flat">
                            Charly Hoffman
                        </Button>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Select;