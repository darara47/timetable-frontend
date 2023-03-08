import { Button, View, Text } from 'react-native';

function SelectorScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Selector Screen</Text>
      <Button
        title="Go to Timetable"
        onPress={() => navigation.navigate('Timetable')}
      />
    </View>
  );
}

export default SelectorScreen;