import React from 'react';
import Row from "react-bootstrap/Row";
import Topics from './topics.js'
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import image from "./images/nav_image.jpg";
function example() {
    console.log('getting data');
}


function Template(props){
    return (
        <Container fluid>
            <Topics/>
                <Row>
                    <Col xs={6} md={{ span: 7, offset: 3 }} className="temp pt-3 pb-3" >
                        <Row className="d-flex justify-content-center no-gutters pl-3" onClick ={example()}>
                            <h3>Amplifying business impact with inventive and strategic digital solution</h3>
                        </Row>
                        <Row className="no-gutters pl-3" >
                        <h6> Author name </h6> 
                        <img src={image} alt="logo" className="nav_image pb-2 pr-2"></img>
                        <p>loriuEt clita stet ut amet accusam gubergren sadipscing justo invidunt. Ut est diam stet et magna vero dolor et kasGroßer sonder wiedersehn wo wiedersehn dich dir verwundert schmilzt klingt dich, gut verschwand du denkst so du des ward ich. In denkst dir so helle der mit in sehr nicht. Friedlich helle verschwand der ward es schon. O helle du mit der wiedersehn. An deine geschaut denkst gartens in immer dich, schwester es schnelle von ruft oft klingt. Deinen nicht beiden vaterland denkst verschwiegen. Herzen lachtet dich ist teuren zurück komm ein lachtet zurück, laue in der ist glück es ist. Liebe im ja nun sonder die denkst vaterland sanft gestehe, du dich gar weh grambefangen liebe junge die. Ich.d..m</p>
                        <p>loriuEt clita stet ut amet accusam gubergren sadipscing justo invidunt. Ut est diam stet et magna vero dolor et kasGroßer sonder wiedersehn wo wiedersehn dich dir verwundert schmilzt klingt dich, gut verschwand du denkst so du des ward ich. In denkst dir so helle der mit in sehr nicht. Friedlich helle verschwand der ward es schon. O helle du mit der wiedersehn. An deine geschaut denkst gartens in immer dich, schwester es schnelle von ruft oft klingt. Deinen nicht beiden vaterland denkst verschwiegen. Herzen lachtet dich ist teuren zurück komm ein lachtet zurück, laue in der ist glück es ist. Liebe im ja nun sonder die denkst vaterland sanft gestehe, du dich gar weh grambefangen liebe junge die. Ich.d..m</p>
                        </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Template;