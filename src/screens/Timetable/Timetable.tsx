import { ReactElement, useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import DayTab from '../../components/DayTab/DayTab';
import { useAppDispatch } from '../../hooks/useApp';
import { getLessonsBySectionId } from '../../services/lessonsService';
import { setLessons } from '../../slices/lessonsSlice';
import { WeekDays } from '../../types/lessons.types';
import { StackNavigation } from '../../types/stackParamList';

type Route = { key: WeekDays, title: string }

const routes: Route[] = [
  { key: WeekDays.monday, title: 'Pon' },
  { key: WeekDays.thuesday, title: 'Wt' },
  { key: WeekDays.wednesday, title: 'Śr' },
  { key: WeekDays.thursday, title: 'Czw' },
  { key: WeekDays.friday, title: 'Pt' },
];

type TimetableScreenProps = {
  navigation: StackNavigation,
  route: {
    params: {
      sectionId: string,
    },
  },
}

const TimetableScreen = (timetableScreenProps: TimetableScreenProps): ReactElement => {
  const { route: { params: { sectionId } } } = timetableScreenProps;

  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useAppDispatch();
  const layout = useWindowDimensions();

  useEffect(() => {
    const getLessons = async () => {
      const lessons = await getLessonsBySectionId(sectionId);
      dispatch(setLessons({ lessons: lessons, sectionId: sectionId }));
    }
    getLessons();
  }, []);

  const renderScene = ({ route }: { route: Route }) => {
    return <DayTab sectionId={sectionId} weekDay={route.key} />
  }

  return (
    <TabView
      navigationState={{ index: tabIndex, routes }}
      renderScene={renderScene}
      onIndexChange={setTabIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

export default TimetableScreen;
