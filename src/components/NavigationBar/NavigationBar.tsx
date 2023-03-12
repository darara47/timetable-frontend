import { ReactElement } from 'react';
import { Appbar } from 'react-native-paper';
import { Screens } from '../../types/screens.enum';
import { SectionTypes } from '../../types/sections.types';
import { StackNavigation } from '../../types/stackParamList';

type NavigationBarProps = {
  isBack: boolean,
  navigation: StackNavigation,
}

const NavigationBar = (navigationBarProps: NavigationBarProps): ReactElement => {
  const { isBack, navigation } = navigationBarProps;
  const navigationState = navigation.getState();
  const routeState = navigationState.routes[navigationState.index];

  const getTitle = (): string => {
    if (routeState.name === Screens.Sections) {
      if (routeState.params?.type === SectionTypes.class) {
        return 'Klasy'
      }
      else if (routeState.params?.type === SectionTypes.classroom) {
        return 'Sale'
      }
      else if (routeState.params?.type === SectionTypes.teacher) {
        return 'Nauczyciele'
      }
    }
    if (routeState.name === Screens.Timetable) {
      return 'Plan zajęć';
    }
    return '';
  }

  return (
    <Appbar.Header>
      {isBack ? <Appbar.BackAction onPress={() => navigation.navigate(Screens.Home)} /> : null}
      <Appbar.Content title={getTitle()} />
    </Appbar.Header>
  );
}

export default NavigationBar;