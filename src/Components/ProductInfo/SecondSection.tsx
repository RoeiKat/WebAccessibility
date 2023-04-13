import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";

const SecondSection = function () {
  return (
    <div className="mt-5 mb-5 row">
      <div className="mt-5 mb-5 col-12 d-flex flex-column flex-md-row justify-content-center">
        <div className="col-12 col-md-2 mx-0 mx-md-5 text-center">
          <FontAwesomeIcon icon={faCode} style={{ fontSize: "160px" }} />
        </div>
        <div className="col-12 mx-5 col-md-4 d-flex align-items-center">
          <ul className="mt-3 fs-4" style={{ fontWeight: "700" }}>
            <li>6 Different features.</li>
            <li className="mb-2 mt-2">Fully customizable code.</li>
            <li>Free and easily accessible.</li>
          </ul>
        </div>
      </div>
      <div className="mt-5 col-12">
        <div className="fs-1 d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faDatabase} style={{ fontSize: "160px" }} />
          <h1
            className="mx-3 mx-md-0 text-secondary"
            style={{ fontWeight: "700" }}
          >
            <span className="mx-md-3 d-flex d-md-inline text-dark">Stores</span>
            Data in localstorage.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
