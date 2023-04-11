import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faDatabase,
  faBolt,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const FourthSection = function () {
  return (
    <div className="mt-5 mb-5 row">
      <div
        className="col-6 col-md-3 d-flex align-items-center fs-4 "
        style={{ fontWeight: "800" }}
      >
        <FontAwesomeIcon icon={faSmile} style={{ fontSize: "32px" }} />
        <span className="mx-3">Easy to use</span>
      </div>
      <div
        className="col-6 col-md-3 d-flex align-items-center fs-4"
        style={{ fontWeight: "800" }}
      >
        <FontAwesomeIcon icon={faDollar} style={{ fontSize: "32px" }} />
        <span className="mx-3">Free to use</span>
      </div>
      <div
        className="col-6 col-md-3 d-flex align-items-center fs-4"
        style={{ fontWeight: "800" }}
      >
        <FontAwesomeIcon icon={faBolt} style={{ fontSize: "32px" }} />
        <span className="mx-3">Fast performance</span>
      </div>
      <div
        className="col-6 col-md-3 d-flex align-items-center fs-4"
        style={{ fontWeight: "800" }}
      >
        <FontAwesomeIcon icon={faDatabase} style={{ fontSize: "32px" }} />
        <span className="mx-3">Stores localy</span>
      </div>
      <div className="mt-5 mb-5">
        <div className="mt-5 mb-5 text-center">
          <h1 style={{ fontWeight: 700 }}>
            So...{" "}
            <span className="text-secondary">What are you waiting for?</span>
          </h1>
          <p className="text-secondary">Try it out now!</p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
