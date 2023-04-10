import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../../store/store";
import { accessibilityActions } from "../../../store/slices/accessibilitySlice";

const ModalCloseBtn = function () {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(accessibilityActions.showModal(false))}
      style={{ fontSize: "32px", cursor: "pointer" }}
    >
      <FontAwesomeIcon icon={faClose} />
    </div>
  );
};

export default ModalCloseBtn;
