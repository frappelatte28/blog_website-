import {Row, Col} from 'react-bootstrap';
import nl2br from 'react-newline-to-break'; 
import * as FaIcons from "react-icons/fa";

function Footer(){
    let Address = "Anumak Technology LLP,\n458 ,Nagar, Bangalore\n560083 India"
    return(
            <Row className=" no-gutters footer">
                <Col className="p-4 ml-5">
                    <a class="margin_bottom footer_heading">Logo</a>
                    <p>aNumak & Company is a Global Management Consulting firm with expertise in building scalable business models for diverse industry verticals. Delivering solutions through consultation, digital transformation and innovative products that tackle modern business problems.</p>    
                </Col>
                <Col className="p-4 ml-5">
                <h4 class="margin_bottom">Contact</h4>
                {nl2br(Address)}
                    <Row className="justify-content-start">
                        <Col xs={1}><FaIcons.FaTwitter/></Col>
                        <Col xs={1}><FaIcons.FaLinkedin/></Col>
                        <Col xs={1}><FaIcons.FaFacebook/></Col>
                        <Col xs={1}><FaIcons.FaInstagram/></Col>
                    </Row>
                </Col> 
            </Row>
    )
}
export default Footer;