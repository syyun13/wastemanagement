import '../styles/Roster.css'
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Roster(props){
    const players = ["Cairon Gallegos", "Rajveer Voyager", "Viktor Stacey", "Andrei Sykes", "Lorcan Hatfield", "Kester Sutton", "Lucas Gallagher", "Mackenzie Berg", "Ariyan Davie", "Maddison Nunez", "Arian Schmitt", "Suleman Charles", "Ellis Lyonfield", "Diogo Holmes", "Ricardo Walters", "Arwelle Beanie", "Maxim Hinton", "Krish Wormald", "Hamaad Kendall", "Sadness Bella", "Josephine Jarvis", "Michael Welsh", "Yassin Copper", "Arda Edmonds", "Randall Porter", "Kylie Williams", "Kristen Sharma", "Cobie Shepherd", "Loren Hebert", "Spencer Cullen", "Jevan Mcknight", "Cali Thornton", "Eden Johnson", "Ksawery Vegabond", "Abubakr Scott", "Jamel Parrish", "Henley Ortiz", "Osama Booth", "Cristiano Glenn", "Nathanael Beasley", "Ishaaq Lutzberg", "Imaan Tapia", "Lukasz Parra", "Abdidula Alston"]
    const { setTier1, setTier2, setTier3 } = props.setTier;
    const { tier1, tier2, tier3 } = props.tier;
    const { page, setPage } = props

    const pageText = ["", "ONE", "TWO", "THREE"];

    const setTier = (tier, arr) => {
        if (tier === 1){
            setTier1(arr);
        } else if (tier === 2){
            setTier2(arr);
        } else if (tier === 3){
            setTier3(arr);
        }
    }

    const selectPlayer = (e) => {
        const player = e.target.innerText;
        let tier = null;
        if (page === 1) tier = tier1;
        if (page === 2) tier = tier2;
        if (page === 3) tier = tier3;

        if (tier.includes(player)){
            if (tier.indexOf(player) === 0){
                setTier(page, [null, tier[1]]);
            } else {
                setTier(page, [tier[0], null]);
            }
        } else if(!tier[0] || !tier[1]) {
            tier[0] ? setTier(page, [tier[0], player]) : setTier(page, [player, tier[1]]);
        }
    }

    return (
        <Container>
            <div>
                <div id="tierTitle">
                    { page === 2 || page === 3 ? <i onClick={() => setPage(page-1)} className="bi bi-arrow-left"></i> : <i style={{color: "#0D6A41"}} className="bi bi-arrow-left"></i> }
                    TIER {pageText[page]}
                    { page === 1 || page === 2 ? <i onClick={() => setPage(page+1)} className="bi bi-arrow-right"></i> : <i style={{color: "#0D6A41"}} className="bi bi-arrow-right"></i> }
                </div>
            </div>
            <Row id="roster">
                {players.map((player, i) => {
                    let tier = null;
                    if (page === 1) tier = tier1;
                    if (page === 2) tier = tier2;
                    if (page === 3) tier = tier3;
                    const active = tier.includes(player);
                    return (
                        <Col sm={3} key={i}>
                            {active ?
                                <Button variant="flat" className="btn-success" name={player} onClick={selectPlayer}>
                                    {player}
                                </Button>
                                :
                                <Button variant="flat" name={player} onClick={selectPlayer}>
                                    {player}
                                </Button>
                            }
                        </Col>
                    )
                })}
            </Row>
            <div>
                <p id="page">{page} / 3</p>
            </div>
        </Container>
    )
}

export default Roster;