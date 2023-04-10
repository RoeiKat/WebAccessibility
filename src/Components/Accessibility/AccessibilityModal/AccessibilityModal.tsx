import ModalCloseBtn from "./ModalCloseBtn";
import { useAppSelector } from "../../../store/store";
import FeaturesContainer from "../Features/FeaturesContainer";

const AccessibilityModal = function () {
  const { accessibilityModalShow } = useAppSelector(
    (state) => state.accessibility
  );
  return (
    <div>
      {accessibilityModalShow && (
        <div
          className="border border-dark"
          style={{
            background: "#FFFFFF",
            width: "400px",
            borderRadius: "3%",
            position: "fixed",
            paddingBottom: "20px",
            left: "6vh",
            top: "30vh",
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
