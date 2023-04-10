import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { AccessibilityInitalState } from "../interface/accessibilitySlice.interface";
import { accessibilityActions } from "../store/slices/accessibilitySlice";
import { writeToLocalStorage } from "../utils/utils";

let firstRender = true;

export const useAccessibility = function () {
  const dispatch = useAppDispatch();
  const accessibilityState: AccessibilityInitalState | null = JSON.parse(
    localStorage.getItem("accessibility")!
  );
  const state = useAppSelector((state) => state.accessibility);
  useEffect(() => {
    if (!firstRender) {
      writeToLocalStorage(state);
    } else if (accessibilityState && firstRender) {
      dispatch(accessibilityActions.useLocalAccessibility(accessibilityState));
      firstRender = false;
    } else {
      return;
    }
  }, [dispatch, state, accessibilityState]);
};
