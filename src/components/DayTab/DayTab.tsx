import { ReactElement } from "react";
import { ScrollView } from "react-native";
import { DataTable, Text } from 'react-native-paper';
import { useAppSelector } from "../../hooks/useApp";
import { selectLessonsByWeekDay } from "../../slices/lessonsSlice";
import { dayTabStyles } from "../../styles/dayTabStyles";
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
            <DataTable.Cell style={dayTabStyles.lessonNumberColumnSize}>{lessonIndex}</DataTable.Cell>
            <DataTable.Cell style={dayTabStyles.scheduleColumnSize}>{`${lessonSchedule.startAt}-${lessonSchedule.endAt}`}</DataTable.Cell>
            <DataTable.Cell style={dayTabStyles.subjectColumnSize} textStyle={dayTabStyles.cell}>{lessonsInRow.map(lesson => lesson.subject).join('\n')}</DataTable.Cell>
            <DataTable.Cell style={dayTabStyles.classroomColumnSize} textStyle={dayTabStyles.cell}>{lessonsInRow.map(lesson => lesson.classroomName).join('\n')}</DataTable.Cell>
          </DataTable.Row>)
      })
    )
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text variant="bodyLarge" style={dayTabStyles.schoolTime}>{getSchoolTime()}</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={dayTabStyles.lessonNumberColumnSize}>Nr</DataTable.Title>
          <DataTable.Title style={dayTabStyles.scheduleColumnSize}>Godzina</DataTable.Title>
          <DataTable.Title style={dayTabStyles.subjectColumnSize}>Przedmiot</DataTable.Title>
          <DataTable.Title style={dayTabStyles.classroomColumnSize}>Sala</DataTable.Title>
        </DataTable.Header>
        {generateTable()}
      </DataTable>
    </ScrollView>
  )
}

export default DayTab;
