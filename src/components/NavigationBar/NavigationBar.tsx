import { ReactElement } from 'react';
import { Appbar } from 'react-native-paper';
import { Screens } from '../../screens/screens.enum';
import { StackNavigation } from '../../types/StackParamList';

type NavigationBarProps = {
  isBack: boolean,
  navigation: StackNavigation,
}

const NavigationBar = (navigationBarProps: NavigationBarProps): ReactElement => {
  const { isBack, navigation } = navigationBarProps;
  const navigationState = navigation.getState();
  const routeState = navigationState.routes[navigationState.index];

  return (
    <Appbar.Header>
      {isBack ? <Appbar.BackAction onPress={() => navigation.navigate(Screens.Home)} /> : null}
      <Appbar.Content title={routeState.name} />
    </Appbar.Header>
  );
}

export default NavigationBar;