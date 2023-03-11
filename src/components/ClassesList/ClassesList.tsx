import { StyleSheet } from 'react-native';
import { List } from "react-native-paper";
import { useAppSelector } from '../../hooks/useApp';
import { selectSectionsByType } from '../../screens/Selector/selectorSlice';
import { Screens } from "../../types/screens.enum";
import { SectionTypes } from '../../types/sections.types';
import { StackNavigation } from '../../types/stackParamList';

type ClassesListProps = {
  navigation: StackNavigation,
}

const ClassesList = (classesListProps: ClassesListProps) => {
  const { navigation } = classesListProps;
  const classes = useAppSelector(state => selectSectionsByType(state, SectionTypes.class))

  return (
    <List.Section style={styles.listSection} title='Wybierz klasę'>
      <List.Accordion title="Pierwsza">
        <List.Item title="First item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
        <List.Item title="Second item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
      </List.Accordion>
      <List.Accordion title="Druga">
        <List.Item title="First item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
        <List.Item title="Second item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
        <List.Item title="First item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
        <List.Item title="Second item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
        <List.Item title="First item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
        <List.Item title="Second item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
      </List.Accordion>
      <List.Accordion title="Trzecia">
        <List.Item title="First item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
        <List.Item title="Second item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
      </List.Accordion>
      <List.Accordion title="Czwarta">
        <List.Item title="First item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
        <List.Item title="Second item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
        <List.Item title="First item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
        <List.Item title="Second item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
        <List.Item title="First item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
        <List.Item title="Second item"
          onPress={() => navigation.navigate(Screens.Timetable)} />
      </List.Accordion>
    </List.Section>
  )
}

const styles = StyleSheet.create({
  listSection: {
    width: 300,
  }
});

export default ClassesList;