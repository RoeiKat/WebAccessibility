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
  reducers: {},
});

export const accessibilityActions = accessibilitySlice.actions;

export default accessibilitySlice.reducer;
