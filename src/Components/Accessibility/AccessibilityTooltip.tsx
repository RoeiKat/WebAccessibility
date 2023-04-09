import React from "react";
import { useAppSelector } from "../../store/store";
import { Tooltip, Overlay } from "react-bootstrap";
import FeaturesContainer from "./Features/FeaturesContainer";

const AccessibilityTooltip = function (props: { ref: any }) {
  const { ref } = props;
  const { accessibilityModalShow } = useAppSelector(
    (state) => state.accessibility
  );
  return (
    <Overlay target={ref} show={accessibilityModalShow} placement="right">
      {(props) => (
        <Tooltip>
          <FeaturesContainer />
        </Tooltip>
      )}
    </Overlay>
  );
};
