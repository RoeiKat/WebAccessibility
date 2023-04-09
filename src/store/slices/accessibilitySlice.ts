import { createSlice } from "@reduxjs/toolkit";
import { AccessibilityInitalState } from "../../interface/accessibilitySlice.interface";

const initalState: AccessibilityInitalState = {
  accessibilityModalShow: false,
  fontSize: 16,
  grayColorsMode: false,
  reversedColorsMode: false,
};

const accessibilitySlice = createSlice({
  name: "accessibility",
  initialState: initalState,
  reducers: {
    showModal(state, action) {
      state.accessibilityModalShow = action.payload;
    },
    resetAccessibilityState(state) {
      state.fontSize = 16;
      document.body.style.fontSize = "16px";
      state.grayColorsMode = false;
      state.reversedColorsMode = false;
      document.body.style.filter = "none";
      localStorage.removeItem("accessibility");
    },
    increaseFontSize(state, action) {
      state.fontSize += action.payload;
      document.body.style.fontSize = `${state.fontSize}px`;
      localStorage.setItem(
        "accessibility",
        JSON.stringify({
          state,
        })
      );
    },
    decreaseFontSize(state, action) {
      state.fontSize -= action.payload;
      document.body.style.fontSize = `${state.fontSize}px`;
      localStorage.setItem(
        "accessibility",
        JSON.stringify({
          state,
        })
      );
    },
    setGrayscaleMode(state) {
      state.grayColorsMode = !state.grayColorsMode;
      document.body.style.filter = state.grayColorsMode
        ? "grayscale(100%)"
        : "grayscale(0%)";
      localStorage.setItem(
        "accessibility",
        JSON.stringify({
          state,
        })
      );
    },
    setReversedColorsMode(state) {
      state.reversedColorsMode = !state.reversedColorsMode;
      document.body.style.filter = state.reversedColorsMode
        ? "invert(100%)"
        : "invert(0%)";
      localStorage.setItem(
        "accessibility",
        JSON.stringify({
          state,
        })
      );
    },
    setLocalAccessibility(state, action) {
      state.fontSize = action.payload.state.fontSize;
      document.body.style.fontSize = `${state.fontSize}px`;
      state.reversedColorsMode = action.payload.state.reversedColorsMode;
      if (state.reversedColorsMode) document.body.style.filter = "invert(100%)";
      state.grayColorsMode = action.payload.state.grayColorsMode;
      if (state.grayColorsMode) document.body.style.filter = "grayscale(100%)";
    },
  },
});

export const accessibilityActions = accessibilitySlice.actions;

export default accessibilitySlice.reducer;
