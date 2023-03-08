import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import HomeScreen from './src/screens/Home/Home';
import SelectorScreen from './src/screens/Selector/Selector';
import TimetableScreen from './src/screens/Timetable/Timetable';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="Selector" component={SelectorScreen} />
        <Stack.Screen name="Timetable" component={TimetableScreen} options={({ navigation }) => ({
          headerLeft: () => (
            <Button
              title='Back'
              onPress={() => navigation.navigate('Home')}
            />
          ),
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
