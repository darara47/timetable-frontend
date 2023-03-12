import { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Divider, List } from "react-native-paper";
import { useAppSelector } from '../../hooks/useApp';
import { selectSectionsByType } from '../../screens/Section/sectionsSlice';
import { Screens } from "../../types/screens.enum";
import { SectionTypes } from '../../types/sections.types';
import { StackNavigation } from '../../types/stackParamList';

type TeachersListProps = {
  navigation: StackNavigation,
}

const TeachersList = (teachersListProps: TeachersListProps) => {
  const { navigation } = teachersListProps;
  const teachers = useAppSelector(state => selectSectionsByType(state, SectionTypes.teacher));

  const generateTeachersList = (): ReactElement[] => (
    teachers.map(teacher => (
      <List.Item title={teacher.name}
        onPress={() => navigation.navigate(Screens.Timetable, { id: teacher.id })}
        key={teacher.id} />
    ))
  );

  return (
    <List.Section style={styles.listSection} title='Wybierz nauczyciela'>
      <Divider />
      {generateTeachersList()}
    </List.Section>
  )
}

const styles = StyleSheet.create({
  listSection: {
    alignSelf: 'stretch',
  }
});

export default TeachersList;