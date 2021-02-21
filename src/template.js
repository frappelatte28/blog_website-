import React from 'react';
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";


function Template(props){
    console.log(props)
    return (
        <div>
            <Row className="no-gutters">
                   <h1> hi</h1> 
            </Row>
            <Row>
               <h1> {props.match.params.id}  </h1> 
            </Row>
        </div>
    )
}

export default Template;