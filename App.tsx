import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/Home';
import TimetableScreen from './src/screens/Timetable/Timetable';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="Timetable" component={TimetableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
