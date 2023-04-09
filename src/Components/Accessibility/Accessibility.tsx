import React, { Fragment } from "react";

import AccessibilityModal from "./AccessibilityModal/AccessibilityModal";
import AccessibilityButton from "./AccessibilityButton";

const Accessibility = function () {
  return (
    <Fragment>
      <AccessibilityModal />
      <AccessibilityButton />
    </Fragment>
  );
};

export default Accessibility;
