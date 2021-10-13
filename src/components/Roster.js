import '../styles/Roster.css'
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Roster(){
    const players = ["Cairon Gallegos", "Rajveer Vo", "Viktor Stacey", "Andrei Sykes", "Lorcan Hatfield", "Kester Sutton", "Luc Gallagher", "Mackenzie Berg", "Ariyan Davie", "Maddison Nunez", "Arian Schmitt", "Suleman Charles", "Ellis Lyon", "Diogo Holmes", "Ricardo Walters", "Arwel Bean", "Maxim Hinton", "Krish Wormald", "Hamaad Kendall", "Said Bell", "Jae Jarvis", "Mike Welsh", "Yassin Cope", "Arda Edmonds", "Randall Porter", "Kya Senior", "Kristen Sharma", "Cobie Shepherd", "Loren Hebert", "Spencer Cullen", "Jevan Mcknight", "Cali Thornton", "Eden Bond", "Ksawery Vega", "Abubakr Scott", "Jamel Parrish", "Henley Ortiz", "Osama Booth", "Cristiano Glenn", "Nathanael Beasley", "Ishaaq Lutz", "Imaan Tapia", "Lukasz Parra", "Abdi Alston"]
    return (
        <Container>
            <div>
                <div id="tierTitle">TIER ONE <i class="bi bi-arrow-right"></i></div>
            </div>
            <Row id="roster">
                {players.map((player, i) => {
                    return (
                        <Col sm={3} key={i}>
                            <Button variant="flat">
                                {player}
                            </Button>
                        </Col>
                    )
                })}
            </Row>
            <div>
                <p id="page">1 / 3</p>
            </div>
        </Container>
    )
}

export default Roster;