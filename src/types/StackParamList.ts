import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Screens } from "./screens.enum";
import { SectionsTypes } from "./selectors.enum";

export type StackParamList = {
  [Screens.Home]: undefined;
  [Screens.Selector]: { type: SectionsTypes };
  [Screens.Timetable]: undefined;
};

export type StackNavigation = NativeStackNavigationProp<StackParamList>;
