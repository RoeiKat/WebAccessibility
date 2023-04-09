import { configureStore } from "@reduxjs/toolkit";

import accessibilitySlice from "./slices/accessibilitySlice";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
export const store = configureStore({
  reducer: {
    accessibility: accessibilitySlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
