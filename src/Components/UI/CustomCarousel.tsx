import { Carousel } from "react-bootstrap";

const CustomCarousel = function () {
  return (
    <Carousel variant="light" fade interval={5000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://iili.io/HvIrXV9.png"
          alt="First slide"
          style={{ width: "400px", height: "350px" }}
        />
        <Carousel.Caption>
          <h3>Components</h3>
          <p>Only 3 Components and you're good to go!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://iili.io/HvI4jzN.png"
          alt="Second slide"
          style={{ width: "400px", height: "350px" }}
        />

        <Carousel.Caption>
          <h3>State</h3>
          <p>Initial state for the slice, fully customizable.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://iili.io/HvIiIgn.png"
          alt="Third slide"
          style={{ width: "400px", height: "350px" }}
        />

        <Carousel.Caption>
          <h3 className="text-dark">Accessibility</h3>
          <p className="text-dark">
            The accessibility component with all its features.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
