import { accessibilityActions } from "../../../store/slices/accessibilitySlice";
import { useAppDispatch } from "../../../store/store";

import FeatureButton from "./FeaturesButton";
import { Container, Row } from "react-bootstrap";
import {
  faPlus,
  faMinus,
  faBarcode,
  faCircleHalfStroke,
  faRotateLeft,
  faLink,
  faHeading,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesContainer = function () {
  let increaseOrDecreaseBy = 4;
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <FeatureButton
          icon={faPlus}
          featureFunc={() =>
            dispatch(
              accessibilityActions.increaseFontSize(increaseOrDecreaseBy)
            )
          }
          featureName="Increase font size"
        />
        <FeatureButton
          icon={faMinus}
          featureFunc={() =>
            dispatch(
              accessibilityActions.decreaseFontSize(increaseOrDecreaseBy)
            )
          }
          featureName="Decrease font size"
        />
        <FeatureButton
          icon={faBarcode}
          featureFunc={() => dispatch(accessibilityActions.setGrayscaleMode())}
          featureName="Gray colors"
        />
        <FeatureButton
          icon={faCircleHalfStroke}
          featureFunc={() =>
            dispatch(accessibilityActions.setReversedColorsMode())
          }
          featureName="Reversed colors"
        />
        <FeatureButton
          icon={faLink}
          featureFunc={() =>
            dispatch(accessibilityActions.setHighlightedLinks())
          }
          featureName="Highlight links"
        />
        <FeatureButton
          icon={faHeading}
          featureFunc={() =>
            dispatch(accessibilityActions.setHighlightedHeaders())
          }
          featureName="Highlight headers"
        />
        <FeatureButton
          icon={faRotateLeft}
          featureFunc={() =>
            dispatch(accessibilityActions.resetAccessibilityState())
          }
          featureName="Reset"
        />
      </Row>
    </Container>
  );
};

export default FeaturesContainer;
