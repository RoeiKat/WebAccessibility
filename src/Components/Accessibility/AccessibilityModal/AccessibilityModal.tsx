import React from "react";
import { Modal } from "react-bootstrap";
import { accessibilityActions } from "../../../store/slices/accessibilitySlice";
import ModalCloseBtn from "./ModalCloseBtn";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import FeaturesContainer from "../Features/FeaturesContainer";

const AccessibilityModal = function () {
  const dispatch = useAppDispatch();
  const { accessibilityModalShow } = useAppSelector(
    (state) => state.accessibility
  );
  return (
    <div>
      {accessibilityModalShow && (
        <div
          style={{
            background: "red",
            width: "400px",
            borderRadius: "3%",
            position: "fixed",
            left: "6vh",
            top: "10vh",
            zIndex: 999,
          }}
        >
          <div className="d-flex justify-content-end mx-2">
            <ModalCloseBtn />
          </div>
          <FeaturesContainer />
        </div>
      )}
    </div>
  );
};

export default AccessibilityModal;

// return (
//     <Modal
//       show={accessibilityModalShow}
//       onHide={() => dispatch(accessibilityActions.showModal(false))}
//       style={{ fontSize: "16px" }}
//     >
//       <Modal.Header closeButton className="mx-3">
//         <Modal.Title className="col-12 text-center">
//           <span>Accessibility</span>
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <FeaturesContainer />
//       </Modal.Body>
//     </Modal>
//   );
