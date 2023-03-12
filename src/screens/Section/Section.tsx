import { ReactElement } from 'react';
import { ScrollView } from 'react-native';
import { StackNavigation } from '../../types/stackParamList';
import ClassesList from '../../components/ClassesList/ClassesList';
import { SectionTypes } from '../../types/sections.types';
import TeachersList from '../../components/TeachersList/TeachersList';
import ClassroomsList from '../../components/ClassroomsList/ClassroomsList';

type SectionsScreenProps = {
  navigation: StackNavigation,
  route: {
    params: {
      type: SectionTypes,
    },
  },
}

const SectionsScreen = (sectionsScreenProps: SectionsScreenProps): ReactElement => {
  const { navigation, route: { params: { type } } } = sectionsScreenProps;

  return (
    <ScrollView>
      {type === SectionTypes.class &&
        <ClassesList navigation={navigation} />}
      {type === SectionTypes.classroom &&
        <ClassroomsList navigation={navigation} />}
      {type === SectionTypes.teacher &&
        <TeachersList navigation={navigation} />}
    </ScrollView>
  );
}

export default SectionsScreen;