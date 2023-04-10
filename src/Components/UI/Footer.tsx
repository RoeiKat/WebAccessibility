import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = function () {
  return (
    <div className="mt-5 mb-5 row d-flex align-items-center">
      <div className="col-12 col-md-9 text-secondary d-flex justify-content-center d-md-block">
        ROEI KATABI - © 2022 ALL RIGHTS RESERVED.
      </div>
      <div className="col-12 col-md-3 mt-2 mt-md-0 row d-flex justify-content-center">
        <div
          className="mx-2 p-3 col-1 d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50%",
            border: "solid #12130F",
            borderWidth: "2px",
            width: "60px",
            height: "60px",
          }}
        >
          <a
            href="https://www.deluxworld.com/en/"
            className="link-dark"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faShop}
              style={{
                fontSize: "24px",
                textDecoration: "none",
                color: "black",
              }}
            />
          </a>
        </div>
        <div
          className="mx-2 p-3 col-1 d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            border: "solid #12130F",
            borderWidth: "2px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/roei-katabi-a66931208/"
            className="link-dark"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                fontSize: "24px",
                textDecoration: "none",
                color: "black",
              }}
            />
          </a>
        </div>
        <div
          className="mx-2 p-3 col-1 d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            border: "solid #12130F",
            borderWidth: "2px",
          }}
        >
          <a
            href="youtube.com/results?search_query=delux+m800"
            className="link-dark"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              style={{
                fontSize: "24px",
                textDecoration: "none",
                color: "black",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
