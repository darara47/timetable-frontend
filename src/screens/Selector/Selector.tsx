import { ReactElement } from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigation } from '../../types/StackParamList';
import { Screens } from '../screens.enum';

type SelectorScreenProps = {
  navigation: StackNavigation,
}

const SelectorScreen = (selectorScreenProps: SelectorScreenProps): ReactElement => {
  const { navigation } = selectorScreenProps;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Selector Screen</Text>
      <Button
        title="Go to Timetable"
        onPress={() => navigation.navigate(Screens.Timetable)}
      />
    </View>
  );
}

export default SelectorScreen;