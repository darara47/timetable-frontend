import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../utils/store";
import { Lesson, WeekDays } from "../types/lessons.types";

interface LessonsState {
  lessons: Lesson[];
  sectionId: string;
}

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState: {
    lessons: [],
    sectionId: "",
  } as LessonsState,
  reducers: {
    set: (
      state,
      action: PayloadAction<{ lessons: Lesson[]; sectionId: string }>
    ) => {
      return {
        ...state,
        lessons: action.payload.lessons,
        sectionId: action.payload.sectionId,
      };
    },
  },
});

export const { set: setLessons } = lessonsSlice.actions;

export const selectLessonsByWeekDay = (
  state: RootState,
  sectionId: string,
  weekDay: WeekDays
): Lesson[] => {
  if (sectionId !== state.lessonsReducer.sectionId) {
    return [];
  }

  return state.lessonsReducer.lessons
    .filter((lesson: Lesson) => lesson.weekDay === weekDay)
    .sort((lessonA, lessonB) => lessonA.lessonNumber - lessonB.lessonNumber);
};

export default lessonsSlice.reducer;
