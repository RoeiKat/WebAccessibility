import CustomCarousel from "../UI/CustomCarousel";

const FifthSection = function () {
  return (
    <div className="row" style={{ marginTop: "100px" }}>
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center mb-5">
        <h1 style={{ fontWeight: "800" }}>
          Integrate easily with only
          <span
            className="mt-1 p-1 d-flex align-items-center"
            style={{ background: "#12130F", width: "65%" }}
          >
            <span className="mb-1 text-light">Three Components.</span>
          </span>
        </h1>
        <p className="text-secondary">
          One is responsible for the local storage logic, while the others are
          there for the logic behind the scenes
        </p>
      </div>
      <div className="mx-md-4 col-12 col-md-5">
        <CustomCarousel />
      </div>
      <div className="mt-5 mb-5">
        <div className="mt-5 mb-5 text-center">
          <h1 style={{ fontWeight: 700 }}>
            So...{" "}
            <span className="text-secondary">What are you waiting for?</span>
          </h1>
          <p className="text-secondary">Try it out now!</p>
          <p className="text-secondary">
            Press the button and experience the fatures!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
