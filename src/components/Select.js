import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

function Select(props){
    const { tier1, tier2, tier3 } = props.tier;
    
    const page = props.page;

    const onClick = () => {
        props.history.push({
            pathname: "/result"
        })
    }

    return (
        <Container>
            <div id="seven">7</div>
            <div className="text">
                <p>You already have Charley on your team, and you have earned six additional roster spots. <br/> Tap on a player to select them.</p>
            </div>
            <div className="list">
                <Row>
                    <Col>
                    {tier1[0] ?
                        <Button variant="flat" className="btn-block btn-success">
                            {tier1[0]}
                        </Button>
                        :
                        <Button variant="flat">
                            Tier 1 Player 1
                        </Button>
                    }
                    </Col>
                    <Col>
                    {tier1[1] ?
                        <Button variant="flat" className="btn-success">
                            {tier1[1]}
                        </Button>
                        :
                        <Button variant="flat">
                            Tier 1 Player 2
                        </Button>
                    }
                    </Col>
                    <Col className="pointer">
                        { page === 1 ? <i className="bi bi-arrow-left arrow"></i> : <></> }
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {tier2[0] ?
                        <Button variant="flat" className="btn-success">
                            {tier2[0]}
                        </Button>
                        :
                        <Button variant="flat">
                            Tier 2 Player 1
                        </Button>
                    }
                    </Col>
                    <Col>
                    {tier2[1] ?
                        <Button variant="flat" className="btn-success">
                            {tier2[1]}
                        </Button>
                        :
                        <Button variant="flat">
                            Tier 2 Player 2
                        </Button>
                    }
                    </Col>
                    <Col className="pointer">
                        { page === 2 ? <i className="bi bi-arrow-left arrow"></i> : <></> }
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {tier3[0] ?
                        <Button variant="flat" className="btn-success">
                            {tier3[0]}
                        </Button>
                        :
                        <Button variant="flat">
                            Tier 3 Player 1
                        </Button>
                    }
                    </Col>
                    <Col>
                    {tier3[1] ?
                        <Button variant="flat" className="btn-success">
                            {tier3[1]}
                        </Button>
                        :
                        <Button variant="flat">
                            Tier 3 Player 2
                        </Button>
                    }
                    </Col>
                    <Col className="pointer">
                        { page === 3 ? <i className="bi bi-arrow-left arrow"></i>  : <></> }
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <Button className="btn-success" variant="flat">
                            Charly Hoffman
                        </Button>
                    </Col>
                </Row>
                {tier1[0] && tier1[1] && tier2[0] && tier2[1] && tier3[0] && tier3[1] ?
                <Row>
                    <Col sm={8}>
                        <Button variant="flat" className="submit" onClick={() => onClick()}>
                            SUBMIT
                        </Button>
                    </Col>
                </Row>
                : <></>}
            </div>
        </Container>
    )
}

export default withRouter(Select);