import { ReactElement } from 'react';
import { List } from "react-native-paper";
import { useAppSelector } from '../../hooks/useApp';
import { selectSectionsByType } from '../../slices/sectionsSlice';
import { listStyles } from '../../styles/listStyles';
import { Screens } from "../../types/screens.enum";
import { SectionTypes } from '../../types/sections.types';
import { StackNavigation } from '../../types/stackParamList';

type ClassroomsListProps = {
  navigation: StackNavigation,
}

const ClassroomsList = (classroomsListProps: ClassroomsListProps) => {
  const { navigation } = classroomsListProps;
  const classrooms = useAppSelector(state => selectSectionsByType(state, SectionTypes.classroom));

  const generateClassroomsList = (): ReactElement[] => (
    classrooms.map(classroom => (
      <List.Item title={classroom.name}
        onPress={() => navigation.navigate(Screens.Timetable, { sectionId: classroom.id })}
        key={classroom.id} />
    ))
  );

  return (
    <List.Section style={listStyles.listSection} title='Wybierz salę'>
      {generateClassroomsList()}
    </List.Section>
  )
}

export default ClassroomsList;