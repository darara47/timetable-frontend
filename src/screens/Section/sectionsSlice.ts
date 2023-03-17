import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../utils/store";
import { Section, SectionTypes } from "../../types/sections.types";

interface SectionsState {
  sections: Section[];
}

export const sectionsSlice = createSlice({
  name: "sections",
  initialState: {
    sections: [],
  } as SectionsState,
  reducers: {
    set: (state, action: PayloadAction<Section[]>) => {
      return {
        ...state,
        sections: action.payload,
      };
    },
  },
});

export const { set } = sectionsSlice.actions;

export const selectSectionsByType = (
  state: RootState,
  type: SectionTypes
): Section[] =>
  state.sectionsReducer.sections
    .filter((section: Section) => section.type === type)
    .sort((sectionA, sectionB) => sectionA.name.localeCompare(sectionB.name));

export default sectionsSlice.reducer;
