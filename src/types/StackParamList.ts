import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Screens } from "./screens.enum";
import { SelectorTypes } from "./selectors.enum";

export type StackParamList = {
  [Screens.Home]: undefined;
  [Screens.Selector]: { type: SelectorTypes };
  [Screens.Timetable]: undefined;
};

export type StackNavigation = NativeStackNavigationProp<StackParamList>;
