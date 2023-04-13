const ThirdSection = function () {
  return (
    <div className="mt-5 mb-5 row">
      <div className="mx-md-3 col-12 col-lg-5">
        <div className="p-5 w-75 mx-5 d-flex flex-column align-items-center justify-content-center">
          <a
            href="#"
            className="fs-1"
            style={{ color: "#E84855", fontWeight: "700" }}
          >
            {"<FirstLink/>"}
          </a>
          <a
            href="#"
            className="fs-1"
            style={{ color: "#3185FC", fontWeight: "700" }}
          >
            {"<SecondLink/>"}
          </a>
          <a
            href="#"
            className="fs-1"
            style={{ color: "#F9DC5C", fontWeight: "700" }}
          >
            {"<ThirdLink/>"}
          </a>
        </div>
        <div className="text-start">
          <h1 style={{ fontWeight: "800" }}>Links feature</h1>
          <p className="text-secondary">
            Built to allow users to emphasize links on your website so they can
            navigate easily between them.
          </p>
        </div>
      </div>
      <div className="mx-md-4 col-12 col-lg-6 d-flex flex-column justify-content-center mb-5">
        <h1 style={{ fontWeight: "800" }}>
          <span
            className="mt-1 p-1 d-flex align-items-center"
            style={{ background: "#12130F", width: "65%" }}
          >
            <span className="mx-2 mb-1 text-light">Fully Customizable.</span>
          </span>
          With heaps of features.
        </h1>
        <p className="text-secondary">
          From changing colors to adding or changing logic for the tool, comes
          with built in 6 features to enable more focus about your product.
        </p>
      </div>
    </div>
  );
};

export default ThirdSection;
