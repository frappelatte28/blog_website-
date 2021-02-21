import React from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Topics() {
    return(
        <div>
    
    <Row className="p-2 d-flex justify-content-center">
        <Col>
          <Button
            style={{
              backgroundColor: "#cedfd9",
              color: "#444545",
              borderRadius: "100px",
            }}
          >
            Artifical intelligence{" "}
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
        </Col>
      </Row>
        </div>
    )
}
export default Topics;