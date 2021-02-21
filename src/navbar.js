import React from "react";
import { BsSearch } from "react-icons/bs";
import * as BsIcons from "react-icons/bs";
import Col from "react-bootstrap/Col";
import * as FaIcons from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import * as IoIcons from "react-icons/io";
import Row from "react-bootstrap/Row";

function Navbar() {
  return (
    <div>
      <Row className="m-2 no-gutters">
        <Col xs={1} className="pl-5 pt-1">
          <BsIcons.BsSearch />
        </Col>
        <Col xs={3}>
          <div class="form-outline">
            <input
              type="search"
              id="form1"
              class="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
          </div>
        </Col>
        <Col className="row justify-content-end mr-4">
          <Col xs={1}>
            {" "}
            <IoIcons.IoMdNotificationsOutline fontSize="1.5rem" />
          </Col>
          <Col xs={1}>
            <FaIcons.FaUserAlt fontSize="1.2rem" />
          </Col>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
