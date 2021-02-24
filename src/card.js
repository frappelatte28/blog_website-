import { Row, Col } from "react-bootstrap";
import BCard from "react-bootstrap/Card";
import * as FaIcons from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import image2 from "./images/image.jpg";
import { Link } from "react-router-dom";
function getBlog(){
  console.log("blog -------- ")
}
function Card(props) {
  return (<Row className=" card_style pl-3 pb-2">
        <Col xs={12} lg={3} md={6}className="m-1 p-2 pl-5 card1">
          <BCard style={{ width: "20rem" }}>
            <Row className="m-1 no-gutters">
              <Col xs={1} className="pl-1">
                <FaIcons.FaUserAlt />
              </Col>
              <Col className="pl-1">
                <BCard.Title>{props.name}</BCard.Title>
              </Col>
            </Row>
            <BCard.Img variant="top" src={props.image} />
            <BCard.Body>
              <BCard.Text>Sad of or ancient earthly and long. Him would deem or now hellas, yet there in of since tis sighed, chaste as him nor girls..ium</BCard.Text>
            </BCard.Body>
            <Col className="p-2 pl-3">
            <Link to={`/template/${props.id}`} className="btn btn-outline-primary" onClick={getBlog} >Read more </Link>
            </Col>
          </BCard>
        </Col>
      </Row>
  );
}
export default Card;
