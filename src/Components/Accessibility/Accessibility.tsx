import { Fragment } from "react";

import AccessibilityModal from "./AccessibilityModal/AccessibilityModal";
import AccessibilityButton from "./AccessibilityButton";

const Accessibility = function (props: { color: string }) {
  return (
    <Fragment>
      <AccessibilityModal color={props.color} />
      <AccessibilityButton color={props.color} />
    </Fragment>
  );
};

export default Accessibility;
