import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faMobile,
  faBolt,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

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
        <span className="mx-3">Free for all</span>
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
        <FontAwesomeIcon icon={faMobile} style={{ fontSize: "32px" }} />
        <span className="mx-3">Phone friendly</span>
      </div>
    </div>
  );
};

export default FourthSection;
