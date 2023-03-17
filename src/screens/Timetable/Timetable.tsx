import { ReactElement, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getLessonsBySectionId } from '../../services/lessonsService';
import { Lesson } from '../../types/lessons.types';
import { StackNavigation } from '../../types/stackParamList';

type TimetableScreenProps = {
  navigation: StackNavigation,
  route: {
    params: {
      sectionId: string,
    },
  },
}

const TimetableScreen = (timetableScreenProps: TimetableScreenProps): ReactElement => {
  const { navigation, route: { params: { sectionId } } } = timetableScreenProps;
  const [timetable, setTimetable] = useState<Lesson[]>();

  useEffect(() => {
    const getLessons = async () => {
      const lessons = await getLessonsBySectionId(sectionId);
      setTimetable(lessons);
    }
    getLessons();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Timetable Screen</Text>
      <Text>{sectionId}</Text>
    </View>
  );
}

export default TimetableScreen;