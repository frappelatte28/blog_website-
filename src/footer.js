import {Row, Col} from 'react-bootstrap';
import nl2br from 'react-newline-to-break'; 
import * as FaIcons from "react-icons/fa";
import {IconContext} from 'react-icons';

function Footer(){
    let Address = "Anumak Technology LLP,\n458 ,Nagar, Bangalore\n560083 India";
    return(
            <Row className=" no-gutters footer">
                <Col className="p-5 ml-5">
                    <a href="https://anumak.com/" class="margin_bottom footer_heading">Logo</a>
                    <p>aNumak & Company is a Global Management Consulting firm with expertise in building scalable business models for diverse industry verticals. Delivering solutions through consultation, digital transformation and innovative products that tackle modern business problems.</p>    
                </Col>
                <Col className="p-5 ml-5">
                <h4 class="margin_bottom">Contact</h4>
                {nl2br(Address)}
                    <Row className="justify-content-start">
                        <IconContext.Provider value={{color:"white" }}>
                            <Col xs={1}><a href="https://twitter.com/aNumak_company" alt="Twitter"><FaIcons.FaTwitter className="icon1"/></a></Col>
                            <Col xs={1}><a href="https://www.linkedin.com/posts/anumak-company_4-keys-to-digital-branding-activity-6719459937191288832-dmX7/"><FaIcons.FaLinkedin /></a></Col>
                            <Col xs={1}><a href="https://www.facebook.com/anumakcompany/"><FaIcons.FaFacebook  /></a></Col>
                            <Col xs={1}><a href="https://www.instagram.com/anumakandcompany/"><FaIcons.FaInstagram /></a></Col>
                        </IconContext.Provider>
                    </Row>
                </Col> 
            </Row>
    )
}
export default Footer;