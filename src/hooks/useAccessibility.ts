import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { AccessibilityInitalState } from "../interface/accessibilitySlice.interface";
import { accessibilityActions } from "../store/slices/accessibilitySlice";

export const useAccessibility = function () {
  const dispatch = useAppDispatch();
  const accessibilityState: AccessibilityInitalState | null = JSON.parse(
    localStorage.getItem("accessibility")!
  );
  const { fontSize, reversedColorsMode, grayColorsMode } = useAppSelector(
    (state) => state.accessibility
  );
  console.log(accessibilityState);
  useEffect(() => {
    if (accessibilityState) {
      dispatch(accessibilityActions.setLocalAccessibility(accessibilityState));
    } else {
      return;
    }
  }, [fontSize, reversedColorsMode, grayColorsMode]);
};
