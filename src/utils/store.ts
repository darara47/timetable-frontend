import { configureStore } from "@reduxjs/toolkit";
import sectionsReducer from "../screens/Section/sectionsSlice";

export const store = configureStore({
  reducer: {
    sectionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
