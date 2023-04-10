import { Fragment } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const CustomNavbar = function () {
  return (
    <Fragment>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#" className="fs-3">
            <span className="text-secondary">DE</span>
            <span style={{ fontWeight: "700" }}>LUX</span>
          </Navbar.Brand>
          <Nav>
            <Nav.Item className="d-flex align-items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mt-1 mx-1" />
              <span style={{ fontWeight: "600" }}>example@example.com</span>
            </Nav.Item>
            <Nav.Item className="mx-4 d-flex align-items-center">
              <FontAwesomeIcon icon={faPhoneVolume} className="mt-1" />
              <span style={{ fontWeight: "600" }}>+972-123-4567</span>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "3px" }}>
              <Button variant="dark" className="px-4 text-center ">
                <FontAwesomeIcon icon={faDollar} className="mx-2" />
                <a
                  className="text-light"
                  target="_blank"
                  href="https://he.aliexpress.com/item/1005004550995519.html?spm=a2g0o.productlist.main.27.674eoS7moS7m97&algo_pvid=8aca29a2-04c9-4065-92c8-a075647ac7c5&algo_exp_id=8aca29a2-04c9-4065-92c8-a075647ac7c5-13&pdp_npi=3%40dis%21ILS%21372.87%21164.08%21%21%21%21%21%402100bb6416811157844942284d0729%2112000029578496104%21sea%21IL%21139975085&curPageLogUid=3vHbLdeFNxgL"
                  style={{ fontWeight: "700", marginRight: "10px" }}
                >
                  BUY NOW!
                </a>
              </Button>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default CustomNavbar;
