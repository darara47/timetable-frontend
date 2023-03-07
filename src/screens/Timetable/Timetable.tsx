import { Button, View, Text } from 'react-native';

function TimetableScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Timetable... again"
        onPress={() => navigation.navigate('Timetable')}
      />
    </View>
  );
}

export default TimetableScreen;