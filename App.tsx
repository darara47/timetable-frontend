import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import HomeScreen from './src/screens/Home/Home';
import SelectorScreen from './src/screens/Selector/Selector';
import TimetableScreen from './src/screens/Timetable/Timetable';
import { Provider as PaperProvider } from 'react-native-paper';
import NavigationBar from './src/components/NavigationBar/NavigationBar';
import { StackNavigation, StackParamList } from './src/types/stackParamList';
import { Screens } from './src/types/screens.enum';
import { store } from './src/utils/store'

const Stack = createNativeStackNavigator<StackParamList>();

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={Screens.Home} screenOptions={{
            header: (props: NativeStackHeaderProps) => <NavigationBar isBack={!!props.back} navigation={props.navigation as StackNavigation} />,
          }}>
            <Stack.Screen name={Screens.Home} component={HomeScreen}
              options={{ headerShown: false }} />
            <Stack.Screen name={Screens.Selector} component={SelectorScreen} />
            <Stack.Screen name={Screens.Timetable} component={TimetableScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
