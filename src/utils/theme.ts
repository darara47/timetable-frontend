import {
  configureFonts,
  DefaultTheme,
  MD3LightTheme,
} from "react-native-paper";

const fontConfig = {
  fontFamily: "Helvetica Neue",
  displayLarge: {
    fontSize: 80,
    lineHeight: 120,
  },
};

export const theme = {
  ...MD3LightTheme,
  // colors: {
  //   backgroundColor: "rgb(255, 255, 20)",
  // },
  fonts: configureFonts({ config: fontConfig }),
};
