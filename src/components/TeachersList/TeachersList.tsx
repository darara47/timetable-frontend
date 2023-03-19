import { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List } from "react-native-paper";
import { useAppSelector } from '../../hooks/useApp';
import { selectSectionsByType } from '../../slices/sectionsSlice';
import { Screens } from "../../types/screens.enum";
import { SectionTypes } from '../../types/sections.types';
import { StackNavigation } from '../../types/stackParamList';

type TeachersListProps = {
  navigation: StackNavigation,
}

const TeachersList = (teachersListProps: TeachersListProps) => {
  const { navigation } = teachersListProps;
  const teachers = useAppSelector(state => selectSectionsByType(state, SectionTypes.teacher));

  const generateTeachersListByName = (lettersPart: number): ReactElement[] => {
    const filterByName = (teacherIndex: number) => {
      let startIndex = 0;
      let endIndex = teachers.length;
      switch (lettersPart) {
        case 0:
          endIndex = teachers.findIndex(teacher => teacher.name.charAt(0) >= 'E' && teacher.name.charAt(0) <= 'Z');
          break;
        case 1:
          startIndex = teachers.findIndex(teacher => teacher.name.charAt(0) >= 'E' && teacher.name.charAt(0) <= 'Z');
          endIndex = teachers.findIndex(teacher => teacher.name.charAt(0) >= 'L' && teacher.name.charAt(0) <= 'Z');
          break;
        case 2:
          startIndex = teachers.findIndex(teacher => teacher.name.charAt(0) >= 'L' && teacher.name.charAt(0) <= 'Z');
          endIndex = teachers.findIndex(teacher => teacher.name.charAt(0) >= 'S' && teacher.name.charAt(0) <= 'Z');
          break;
        case 3:
          startIndex = teachers.findIndex(teacher => teacher.name.charAt(0) >= 'S' && teacher.name.charAt(0) <= 'Z');
          break;
      }
      return teacherIndex >= startIndex && teacherIndex < endIndex;
    }
    return teachers.filter((teacher, index) => filterByName(index)).map(teacher => (
      <List.Item title={teacher.name}
        onPress={() => navigation.navigate(Screens.Timetable, { sectionId: teacher.id })}
        key={teacher.id} />
    ))
  };

  return (
    <List.Section style={styles.listSection} title='Wybierz nauczyciela'>
      <List.Accordion title="A-D">
        <ScrollView style={styles.scrollView}>
          {generateTeachersListByName(0)}
        </ScrollView>
      </List.Accordion>
      <List.Accordion title="E-K">
        <ScrollView style={styles.scrollView}>
          {generateTeachersListByName(1)}
        </ScrollView>
      </List.Accordion>
      <List.Accordion title="L-R">
        <ScrollView style={styles.scrollView}>
          {generateTeachersListByName(2)}
        </ScrollView>
      </List.Accordion>
      <List.Accordion title="S-Z">
        <ScrollView style={styles.scrollView}>
          {generateTeachersListByName(3)}
        </ScrollView>
      </List.Accordion>
    </List.Section>
  )
}

const styles = StyleSheet.create({
  listSection: {
    alignSelf: 'stretch',
  },
  scrollView: {
    maxHeight: 308,
  },
});

export default TeachersList;