import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryFull, faFeather } from "@fortawesome/free-solid-svg-icons";

const SecondSection = function () {
  return (
    <div className="mt-5 mb-5 row">
      <div className="mt-5 mb-5 col-12 d-flex justify-content-center">
        <div className="col-2 text-center">
          <FontAwesomeIcon
            icon={faBatteryFull}
            style={{ rotate: "-90deg", fontSize: "160px" }}
          />
        </div>
        <div className="col-4 d-flex align-items-center">
          <ul className="mt-3 fs-4" style={{ fontWeight: "700" }}>
            <li>Built in rechargeable battery.</li>
            <li className="mb-2 mt-2">USB to Type C charging.</li>
            <li>Playtime of up to 56 hours.</li>
          </ul>
        </div>
      </div>
      <div className="mt-5 col-12">
        <div className="fs-1 d-flex align-items-center justify-content-center">
          <FontAwesomeIcon
            icon={faFeather}
            style={{ transform: "scaleX(-1)", fontSize: "160px" }}
          />
          <h1 className="text-secondary" style={{ fontWeight: "700" }}>
            <span className="mx-3 text-dark">70G</span>
            Lightweight and Ambidextrous.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
