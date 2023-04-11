const FirstSection = function () {
  return (
    <div className="row">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center mb-5">
        <h1 style={{ fontWeight: "800" }}>
          Making the web accessible
          <span
            className="mt-1 p-1 d-flex align-items-center"
            style={{ background: "#12130F", width: "45%" }}
          >
            <span className="mb-1 text-light">For everyone.</span>
          </span>
        </h1>
        <p className="text-secondary">
          Try now our web accessibility tool here to improve experience for
          those who needs it most, making the web equal.
        </p>
      </div>
      <div className="mx-md-4 col-12 col-md-5">
        <div className="p-5 w-75 mx-5 d-flex flex-column align-items-center justify-content-center">
          <h1 style={{ color: "#08415C", fontWeight: "700" }}>
            {"<H1Heading/>"}
          </h1>
          <h2 style={{ color: "#CC2936", fontWeight: "700" }}>
            {"<H2Heading/>"}
          </h2>
          <h3 style={{ color: "#18F2B2", fontWeight: "700" }}>
            {"<H3Heading/>"}
          </h3>
        </div>
        {/* <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41opgWSjttL.jpg"
          alt="m-800 pro gaming mouse"
          className="w-75 mx-5"
        /> */}
        <div className="text-md-end">
          <h1 style={{ fontWeight: "800" }}>Headings feature</h1>
          <p className="text-secondary">
            Highlight's your website headers so that people can understand the -
            workflow of your sections, applying an underline on all of the H
            tags on your website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
