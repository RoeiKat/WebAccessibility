import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faComputerMouse,
  faMicrochip,
  faBolt,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const FourthSection = function () {
  return (
    <div className="mt-5 mb-5 row">
      <div
        className="col-6 col-md-3 d-flex align-items-center fs-4 "
        style={{ fontWeight: "800" }}
      >
        <FontAwesomeIcon icon={faGaugeHigh} style={{ fontSize: "32px" }} />
        <span className="mx-3">19000DPI</span>
      </div>
      <div
        className="col-6 col-md-3 d-flex align-items-center fs-4"
        style={{ fontWeight: "800" }}
      >
        <FontAwesomeIcon icon={faComputerMouse} style={{ fontSize: "32px" }} />
        <span className="mx-3">80M+ Clicks</span>
      </div>
      <div
        className="col-6 col-md-3 d-flex align-items-center fs-4"
        style={{ fontWeight: "800" }}
      >
        <FontAwesomeIcon icon={faBolt} style={{ fontSize: "32px" }} />
        <span className="mx-3">1000Hz Refresh Rate</span>
      </div>
      <div
        className="col-6 col-md-3 d-flex align-items-center fs-4"
        style={{ fontWeight: "800" }}
      >
        <FontAwesomeIcon icon={faMicrochip} style={{ fontSize: "32px" }} />
        <span className="mx-3">PAW3370 Chip</span>
      </div>
      <div className="mt-5 mb-5">
        <div className="mt-5 mb-5 text-center">
          <h1 style={{ fontWeight: 700 }}>
            So...{" "}
            <span className="text-secondary">What are you waiting for?</span>
          </h1>
          <p className="text-secondary">Order your new gaming mouse now!</p>
          <Button variant="dark" className="px-5">
            <FontAwesomeIcon icon={faDollar} className="mx-2" />
            <a
              href="https://he.aliexpress.com/item/1005004550995519.html?spm=a2g0o.productlist.main.27.674eoS7moS7m97&algo_pvid=8aca29a2-04c9-4065-92c8-a075647ac7c5&algo_exp_id=8aca29a2-04c9-4065-92c8-a075647ac7c5-13&pdp_npi=3%40dis%21ILS%21372.87%21164.08%21%21%21%21%21%402100bb6416811157844942284d0729%2112000029578496104%21sea%21IL%21139975085&curPageLogUid=3vHbLdeFNxgL"
              className="text-light"
              target="_blank"
              style={{ fontWeight: "700", marginRight: "10px" }}
            >
              BUY NOW!
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
