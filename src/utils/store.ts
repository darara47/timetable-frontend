import { configureStore } from "@reduxjs/toolkit";
import lessonsReducer from "../slices/lessonsSlice";
import sectionsReducer from "../slices/sectionsSlice";

export const store = configureStore({
  reducer: {
    lessonsReducer,
    sectionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
