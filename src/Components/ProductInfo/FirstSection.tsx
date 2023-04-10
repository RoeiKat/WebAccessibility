const FirstSection = function () {
  return (
    <div className="row">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center mb-5">
        <h1 style={{ fontWeight: "800" }}>
          Our gaming mouse will be
          <span
            className="mt-1 p-1 d-flex align-items-center justify-content-center"
            style={{ background: "#12130F", width: "80%" }}
          >
            <span className="mb-1 text-light">your last gaming mouse.</span>
          </span>
        </h1>
        <p className="text-secondary">
          Shop now for everything to improve your gaming setup and experience -
          Upgrade your setup now, with Free Shipping on most items.
        </p>
      </div>
      <div className="mx-md-4 col-12 col-md-5">
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41opgWSjttL.jpg"
          alt="m800 gaming mouse"
          className="w-75 mx-5"
        />
        <div className="text-md-end">
          <h1 style={{ fontWeight: "800" }}>M800 Pro</h1>
          <p className="text-secondary">
            One of the most important device for enthusiast gamers, a good
            gaming mouse will impact your gaming performance on all types of
            games.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
