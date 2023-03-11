import { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigation } from '../../types/stackParamList';
import { Screens } from '../../types/screens.enum';
import { Button, Text } from 'react-native-paper';
import { SectionsTypes } from '../../types/selectors.enum';

type HomeScreenProps = {
  navigation: StackNavigation,
}

const HomeScreen = (homeScreenProps: HomeScreenProps): ReactElement => {
  const { navigation } = homeScreenProps;

  return (
    <View style={styles.container}>
      <Text variant="displayLarge">Tygiel</Text>
      <Text variant="headlineMedium">Plan lekcji</Text>
      <Button mode="contained" onPress={() => navigation.navigate(Screens.Selector, { type: SectionsTypes.Classes })}>
        Klasy
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate(Screens.Selector, { type: SectionsTypes.Teachers })}>
        Nauczyciele
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate(Screens.Selector, { type: SectionsTypes.Classrooms })}>
        Sale
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 50,
  }
});

export default HomeScreen;