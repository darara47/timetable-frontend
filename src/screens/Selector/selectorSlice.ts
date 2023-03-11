import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../utils/store";
import { Section, Sections, SectionTypes } from "../../types/sections.types";

interface SectionsState {
  sections: Sections;
}

export const sectionsSlice = createSlice({
  name: "sections",
  initialState: {
    sections: [],
  } as SectionsState,
  reducers: {
    set: (state, action: PayloadAction<Sections>) => {
      return {
        ...state,
        sections: action.payload,
      };
    },
  },
});

export const { set } = sectionsSlice.actions;

export const selectSectionsByType = (state: RootState, type: SectionTypes) =>
  state.sectionsReducer.sections.find(
    (section: Section) => section.type === type
  );

export default sectionsSlice.reducer;
