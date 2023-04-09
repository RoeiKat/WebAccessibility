import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { AccessibilityInitalState } from "../interface/accessibilitySlice.interface";

export const useAccessibility = function () {
  const dispatch = useAppDispatch();
  const accessibilityState: AccessibilityInitalState | null = JSON.parse(
    localStorage.getItem("accessibility")!
  );
  const { fontSize, reversedColorsMode, grayColorsMode } = useAppSelector(
    (state) => state.accessibility
  );
  useEffect(() => {}, [fontSize, reversedColorsMode, grayColorsMode]);
};
