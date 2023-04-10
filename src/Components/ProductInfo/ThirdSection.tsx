const ThirdSection = function () {
  return (
    <div className="mt-5 mb-5 row">
      <div className="mx-4 col-5">
        <img
          src="https://preview.redd.it/new-refined-delux-m800-software-now-with-lod-and-power-off-v0-skdalvkhy3a81.png?width=640&crop=smart&auto=webp&s=34eecd586b62f3ed4738426415f68ba9c150a71f"
          alt="m800 gaming mouse"
          className="w-100"
        />
        <div className="text-start">
          <h1 style={{ fontWeight: "800" }}>Delux Software</h1>
          <p className="text-secondary">
            Built to allow full customization for your product, From customizing
            your DPI,RGB,LOD,Polling Rate or Macro's - here you can find it all.
          </p>
        </div>
      </div>
      <div className="mx-4 col-6 d-flex flex-column justify-content-center mb-5">
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
          Express yourself and control your color theme to perfect your setup
          Without compromising about performance.
        </p>
      </div>
    </div>
  );
};

export default ThirdSection;
