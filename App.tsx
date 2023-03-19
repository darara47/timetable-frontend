import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Provider as ReduxProvider } from 'react-redux'
import HomeScreen from './src/screens/Home/Home';
import SectionsScreen from './src/screens/Section/Section';
import TimetableScreen from './src/screens/Timetable/Timetable';
import { Provider as PaperProvider } from 'react-native-paper';
import NavigationBar from './src/components/NavigationBar/NavigationBar';
import { StackNavigation, StackParamList } from './src/types/stackParamList';
import { Screens } from './src/types/screens.enum';
import { store } from './src/utils/store'
import { theme } from './src/utils/theme';

const Stack = createNativeStackNavigator<StackParamList>();

const App = () => (
  <ReduxProvider store={store}>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Screens.Home} screenOptions={{
          header: (props: NativeStackHeaderProps) => <NavigationBar isBack={!!props.back} navigation={props.navigation as StackNavigation} />,
        }}>
          <Stack.Screen name={Screens.Home} component={HomeScreen}
            options={{ headerShown: false }} />
          <Stack.Screen name={Screens.Sections} component={SectionsScreen} />
          <Stack.Screen name={Screens.Timetable} component={TimetableScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </ReduxProvider>
);

export default App;
