import React from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Topics() {
    return(
        <div>
    
    <Row className="no-gutters">
        <Col className="p-3">
        <ul class="list-group list-group-horizontal-lg topic ">
          <a href="#"><li class="list-group-item">Artificial Intelligence</li></a>
          <a href="#"><li class="list-group-item">Development</li></a>
          <a href="#"><li class="list-group-item">Design</li></a>
          <a href="#"><li class="list-group-item">Machine Learning</li></a>
          <a href="#"><li class="list-group-item">Product Designer</li></a>
         
        </ul> 
        </Col>
        {/* <Col>
          <Button
            style={{
              backgroundColor: "#cedfd9",
              color: "#444545",
              borderRadius: "100px",
            }}
          >
            Machine learning{" "}
          </Button>
        </Col>
        <Col>
          <Button
            style={{
              backgroundColor: "#cedfd9",
              color: "#444545",
              borderRadius: "100px",
            }}
          >
            Web development{" "}
          </Button>
        </Col>
        <Col>
          <Button
            style={{
              backgroundColor: "#cedfd9",
              color: "#444545",
              borderRadius: "100px",
            }}
          >
            Product design{" "}
          </Button>
        </Col>
        <Col>
          <Button
            style={{
              backgroundColor: "#cedfd9",
              color: "#444545",
              borderRadius: "100px",
            }}
          >
            UI/UX developer{" "}
          </Button>
        </Col> */}
      </Row>
        </div>
    )
}
export default Topics;