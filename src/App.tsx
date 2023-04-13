import { Fragment } from "react";
import Accessibility from "./Components/Accessibility/Accessibility";
import { useAccessibility } from "./hooks/useAccessibility";
import { Container } from "react-bootstrap";
import CustomNavbar from "./Components/UI/CustomNavbar";
import FirstSection from "./Components/ProductInfo/FirstSection";
import SecondSection from "./Components/ProductInfo/SecondSection";
import ThirdSection from "./Components/ProductInfo/ThirdSection";
import FourthSection from "./Components/ProductInfo/FourthSection";
import Footer from "./Components/UI/Footer";
import FifthSection from "./Components/ProductInfo/FifthSection";

function App() {
  useAccessibility();
  return (
    <Fragment>
      <CustomNavbar />
      <Accessibility color="#FFFFFF" />
      <Container className="mt-5" id="container">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Footer />
      </Container>
    </Fragment>
  );
}

export default App;
