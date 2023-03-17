import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Screens } from "./screens.enum";
import { SectionTypes } from "./sections.types";

export type StackParamList = {
  [Screens.Home]: undefined;
  [Screens.Sections]: { type: SectionTypes };
  [Screens.Timetable]: { sectionId: string };
};

export type StackNavigation = NativeStackNavigationProp<StackParamList>;
