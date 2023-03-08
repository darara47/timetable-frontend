import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Screens } from "../screens/screens.enum";

export type StackParamList = {
  [Screens.Home]: undefined;
  [Screens.Selector]: undefined;
  [Screens.Timetable]: undefined;
};

export type StackNavigation = NativeStackNavigationProp<StackParamList>;
