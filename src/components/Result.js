import '../styles/Result.css'
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

function Result(props){
    const onClick = () => {
        props.history.push({
            pathname: "/"
        })
    }
    return (
        <Container>
            <div id="message">
                <h1>CONGRATS!</h1>
                <h3>YOUR PICKS HAVE BEEN SAVED</h3>
                <Button variant="flat" className="submit" onClick={() => onClick()}>
                    START AGAIN
                </Button>
            </div>
        </Container>
    )
}

export default withRouter(Result);