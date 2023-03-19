import { ReactElement } from "react";
import { StyleSheet, ScrollView, TextStyle } from "react-native";
import { DataTable, Text } from 'react-native-paper';
import { useAppSelector } from "../../hooks/useApp";
import { selectLessonsByWeekDay } from "../../slices/lessonsSlice";
import { lessonsSchedule, WeekDays } from "../../types/lessons.types";

type DayTabProps = {
  sectionId: string,
  weekDay: WeekDays,
}

const DayTab = (dayTabProps: DayTabProps): ReactElement => {
  const { sectionId, weekDay } = dayTabProps;
  const lessons = useAppSelector(state => selectLessonsByWeekDay(state, sectionId, weekDay));

  const getSchoolTime = (): string => {
    const firstLesson = lessons.sort((lessonA, lessonB) => lessonA.lessonNumber - lessonB.lessonNumber)[0];
    const lastLesson = lessons.sort((lessonA, lessonB) => lessonB.lessonNumber - lessonA.lessonNumber)[0];

    if (!firstLesson || !lastLesson) {
      return '';
    }
    return `Godziny zajęć: ${lessonsSchedule[firstLesson.lessonNumber]?.startAt} - ${lessonsSchedule[lastLesson.lessonNumber]?.endAt}`;
  }

  const generateTable = (): ReactElement[] => {
    return (
      lessonsSchedule.map((lessonSchedule, lessonIndex) => {
        const lessonsInRow = lessons.filter(lesson => lesson.lessonNumber === lessonIndex)
        return (
          <DataTable.Row key={lessonSchedule.startAt}>
            <DataTable.Cell style={styles.lessonNumberColumnSize}>{lessonIndex}</DataTable.Cell>
            <DataTable.Cell style={styles.scheduleColumnSize}>{`${lessonSchedule.startAt}-${lessonSchedule.endAt}`}</DataTable.Cell>
            <DataTable.Cell style={styles.subjectColumnSize} textStyle={styles.cell}>{lessonsInRow.map(lesson => lesson.subject).join('\n')}</DataTable.Cell>
            <DataTable.Cell style={styles.classroomColumnSize} textStyle={styles.cell}>{lessonsInRow.map(lesson => lesson.classroomName).join('\n')}</DataTable.Cell>
          </DataTable.Row>)
      })
    )
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text variant="bodyLarge" style={styles.schoolTime}>{getSchoolTime()}</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.lessonNumberColumnSize}>Nr</DataTable.Title>
          <DataTable.Title style={styles.scheduleColumnSize}>Godzina</DataTable.Title>
          <DataTable.Title style={styles.subjectColumnSize}>Przedmiot</DataTable.Title>
          <DataTable.Title style={styles.classroomColumnSize}>Sala</DataTable.Title>
        </DataTable.Header>
        {generateTable()}
      </DataTable>
    </ScrollView>
  )
}

type Cell = {
  textOverflow: string,
  whiteSpace: string,
}

const styles = StyleSheet.create({
  schoolTime: {
    color: 'rgb(28, 27, 31)',
    marginTop: 10,
    textAlign: 'center'
  },
  cell: {
    textOverflow: 'clip',
    whiteSpace: 'wrap',
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

export default DayTab;
