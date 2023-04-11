import { Fragment } from "react";
import Accessibility from "./Components/Accessibility/Accessibility";
import { useAccessibility } from "./hooks/useAccessibility";
import { Container } from "react-bootstrap";
import CustomNavbar from "./Components/UI/CustomNavbar";
import CustomCarousel from "./Components/UI/CustomCarousel";
import FirstSection from "./Components/ProductInfo/FirstSection";
import SecondSection from "./Components/ProductInfo/SecondSection";
import ThirdSection from "./Components/ProductInfo/ThirdSection";
import FourthSection from "./Components/ProductInfo/FourthSection";
import Footer from "./Components/UI/Footer";

function App() {
  useAccessibility();
  return (
    <Fragment>
      <CustomNavbar />
      <Accessibility />
      <Container className="mt-5" id="container">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Footer />
      </Container>
    </Fragment>
  );
}

export default App;
