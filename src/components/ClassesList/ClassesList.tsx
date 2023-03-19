import { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List } from "react-native-paper";
import { useAppSelector } from '../../hooks/useApp';
import { selectSectionsByType } from '../../slices/sectionsSlice';
import { Screens } from "../../types/screens.enum";
import { Section, SectionTypes, SectionYears } from '../../types/sections.types';
import { StackNavigation } from '../../types/stackParamList';

type ClassesListProps = {
  navigation: StackNavigation,
}

const ClassesList = (classesListProps: ClassesListProps) => {
  const { navigation } = classesListProps;
  const classes = useAppSelector(state => selectSectionsByType(state, SectionTypes.class));

  const generateClassesListByYear = (year: SectionYears): ReactElement[] => {
    const filterByYear = (_class: Section) => {
      switch (year) {
        case SectionYears.first:
          return _class.name.charAt(0) === '1';
        case SectionYears.second:
          return _class.name.charAt(0) === '2';
        case SectionYears.third:
          return _class.name.charAt(0) === '3';
        case SectionYears.fourth:
          return _class.name.charAt(0) === '4';
        case SectionYears.fifth:
          return _class.name.charAt(0) === '5';
      }
    }
    return classes.filter(_class => filterByYear(_class)).map(_class => (
      <List.Item title={_class.name}
        onPress={() => navigation.navigate(Screens.Timetable, { sectionId: _class.id })}
        key={_class.id} />
    ))
  };

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