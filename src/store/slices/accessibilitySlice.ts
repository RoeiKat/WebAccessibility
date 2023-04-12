import { createSlice } from "@reduxjs/toolkit";
import { AccessibilityInitalState } from "../../interface/accessibilitySlice.interface";
import { highlightAllLinks, highlightAllHeaders } from "../../utils/utils";

const initalState: AccessibilityInitalState = {
  accessibilityModalShow: false,
  fontSize: 16,
  grayColorsMode: false,
  reversedColorsMode: false,
  highlightLinksMode: false,
  highlightHeadersMode: false,
};

const accessibilitySlice = createSlice({
  name: "accessibility",
  initialState: initalState,
  reducers: {
    showModal(state, action) {
      state.accessibilityModalShow = action.payload;
    },
    resetAccessibilityState(state) {
      const container = document.getElementById("container");
      state.fontSize = 16;
      document.body.style.fontSize = "16px";
      state.grayColorsMode = false;
      state.reversedColorsMode = false;
      container!.style.filter = "none";
      state.highlightHeadersMode = false;
      highlightAllHeaders(false);
      state.highlightLinksMode = false;
      highlightAllLinks(false);
      localStorage.removeItem("accessibility");
    },
    increaseFontSize(state, action) {
      if (state.fontSize < 32) {
        state.fontSize += action.payload;
        document.body.style.fontSize = `${state.fontSize}px`;
      }
    },
    decreaseFontSize(state, action) {
      if (state.fontSize > 12) {
        state.fontSize -= action.payload;
        document.body.style.fontSize = `${state.fontSize}px`;
      }
    },
    setGrayscaleMode(state) {
      state.grayColorsMode = !state.grayColorsMode;
      const container = document.getElementById("container");
      container!.style.filter = state.grayColorsMode
        ? "grayscale(100%)"
        : "grayscale(0%)";
    },
    setReversedColorsMode(state) {
      state.reversedColorsMode = !state.reversedColorsMode;
      const container = document.getElementById("container");
      container!.style.filter = state.reversedColorsMode
        ? "invert(100%)"
        : "invert(0%)";
    },
    setHighlightedLinks(state) {
      state.highlightLinksMode = !state.highlightLinksMode;
      highlightAllLinks(state.highlightLinksMode);
    },
    setHighlightedHeaders(state) {
      state.highlightHeadersMode = !state.highlightHeadersMode;
      highlightAllHeaders(state.highlightHeadersMode);
    },
    useLocalAccessibility(state, action) {
      const container = document.getElementById("container");
      state.fontSize = action.payload.state.fontSize;
      document.body.style.fontSize = `${state.fontSize}px`;
      state.reversedColorsMode = action.payload.state.reversedColorsMode;
      if (state.reversedColorsMode) container!.style.filter = "invert(100%)";
      state.grayColorsMode = action.payload.state.grayColorsMode;
      if (state.grayColorsMode) container!.style.filter = "grayscale(100%)";
      state.highlightHeadersMode = action.payload.state.highlightHeadersMode;
      highlightAllHeaders(state.highlightHeadersMode);
      state.highlightLinksMode = action.payload.state.highlightLinksMode;
      highlightAllLinks(state.highlightLinksMode);
    },
  },
});

export const accessibilityActions = accessibilitySlice.actions;

export default accessibilitySlice.reducer;
