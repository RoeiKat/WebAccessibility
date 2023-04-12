import React from "react";
import { useAppDispatch } from "../../store/store";
import { accessibilityActions } from "../../store/slices/accessibilitySlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";

const AccessibilityButton = function () {
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        background: "#FFFFFF",
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "50%",
        fontSize: "20px",
        position: "fixed",
        cursor: "pointer",
        top: "10vh",
        zIndex: 999,
      }}
      className="d-flex flex-row align-items-center justify-content-center border border-dark"
      onClick={() => dispatch(accessibilityActions.showModal(true))}
    >
      <div>
        <FontAwesomeIcon icon={faWheelchair} />
      </div>
    </div>
  );
};

export default AccessibilityButton;
