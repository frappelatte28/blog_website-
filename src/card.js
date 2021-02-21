import { Row, Col } from "react-bootstrap";
import BCard from "react-bootstrap/Card";
import * as FaIcons from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import image2 from "./images/image.jpg";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <div>
      <Col className="m-3 card1">
        <BCard style={{ width: "20rem" }}>
          <Row className="m-1 ml-2 no-gutters">
            <Col xs={1}>
              <FaIcons.FaUserAlt />
            </Col>
            <Col>
              <BCard.Title>{props.name}</BCard.Title>
            </Col>
          </Row>
          <h6>{props.date}</h6>
          <BCard.Img variant="top" src={props.image} />
          <BCard.Body>
            <BCard.Text>{props.description}</BCard.Text>
            <Link to={`/template/${props.id}`}>Read More </Link>
          </BCard.Body>
        </BCard>
      </Col>
    </div>
  );
}
export default Card;
