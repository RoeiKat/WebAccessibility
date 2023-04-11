import { Fragment } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const CustomNavbar = function () {
  return (
    <Fragment>
      <Navbar bg="light" variant="light" collapseOnSelect expand="md">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#" className="col-6 fs-3">
            <span className="text-secondary">AB</span>
            <span style={{ fontWeight: "700" }}>ILLITY</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav>
              <Nav.Item className="mt-2 mt-sm-0 d-flex align-items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mt-1 mx-1" />
                <span style={{ fontWeight: "600" }}>example@example.com</span>
              </Nav.Item>
              <Nav.Item className="mt-2 mt-sm-0 mx-1 mx-sm-4 d-flex align-items-center">
                <FontAwesomeIcon icon={faPhoneVolume} className="mt-1" />
                <span style={{ fontWeight: "600" }}>+972-123-4567</span>
              </Nav.Item>
              <Nav.Item style={{ marginLeft: "3px" }} className="mt-2 mt-sm-0">
                <Button variant="dark" className="px-4 text-center ">
                  <FontAwesomeIcon icon={faUser} className="mx-2" />
                  <a
                    className="text-light"
                    target="_blank"
                    href="#"
                    style={{ fontWeight: "700", marginRight: "10px" }}
                  >
                    CONTACT US!
                  </a>
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default CustomNavbar;
