import { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List } from "react-native-paper";
import { useAppSelector } from '../../hooks/useApp';
import { selectSectionsByType } from '../../screens/Section/sectionsSlice';
import { Screens } from "../../types/screens.enum";
import { SectionTypes, SectionYears } from '../../types/sections.types';
import { StackNavigation } from '../../types/stackParamList';

type ClassesListProps = {
  navigation: StackNavigation,
}

const ClassesList = (classesListProps: ClassesListProps) => {
  const { navigation } = classesListProps;
  const classes = useAppSelector(state => selectSectionsByType(state, SectionTypes.class));

  const generateClassesListByYear = (year: SectionYears): ReactElement[] => (
    classes.filter(_class => _class.year === year).map(_class => (
      <List.Item title={_class.name}
        onPress={() => navigation.navigate(Screens.Timetable, { id: _class.id })}
        key={_class.id} />
    ))
  );

  return (
    <List.Section style={styles.listSection} title='Wybierz klasę'>
      <List.Accordion title="Pierwsza">
        <ScrollView style={styles.scrollView}>
          {generateClassesListByYear(SectionYears.first)}
        </ScrollView>
      </List.Accordion>
      <List.Accordion title="Druga">
        <ScrollView style={styles.scrollView}>
          {generateClassesListByYear(SectionYears.second)}
        </ScrollView>
      </List.Accordion>
      <List.Accordion title="Trzecia">
        <ScrollView style={styles.scrollView}>
          {generateClassesListByYear(SectionYears.third)}
        </ScrollView>
      </List.Accordion>
      <List.Accordion title="Czwarta">
        <ScrollView style={styles.scrollView}>
          {generateClassesListByYear(SectionYears.fourth)}
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

export default ClassesList;