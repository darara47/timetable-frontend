import { StyleSheet, TextStyle } from "react-native";

type Cell = {
  textOverflow: string;
  whiteSpace: string;
};

export const dayTabStyles = StyleSheet.create({
  schoolTime: {
    color: "rgb(28, 27, 31)",
    marginTop: 10,
    textAlign: "center",
  },
  cell: {
    textOverflow: "clip",
    whiteSpace: "wrap",
  } as Cell as TextStyle,
  lessonNumberColumnSize: {
    flex: 2,
  },
  scheduleColumnSize: {
    flex: 9,
  },
  subjectColumnSize: {
    flex: 12,
  },
  classroomColumnSize: {
    flex: 4,
  },
});
