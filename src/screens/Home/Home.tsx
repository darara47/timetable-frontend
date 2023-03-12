import { ReactElement, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigation } from '../../types/stackParamList';
import { Screens } from '../../types/screens.enum';
import { Button, Text } from 'react-native-paper';
import { useAppDispatch } from '../../hooks/useApp';
import { sectionsGetAll } from '../../services/sectionsService';
import { set } from '../Section/sectionsSlice';
import { SectionTypes } from '../../types/sections.types';

type HomeScreenProps = {
  navigation: StackNavigation,
}

const HomeScreen = (homeScreenProps: HomeScreenProps): ReactElement => {
  const { navigation } = homeScreenProps;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getSections = async () => {
      const sections = await sectionsGetAll();
      dispatch(set(sections));
    }
    getSections();
  }, []);

  return (
    <View style={styles.container}>
      <Text variant="displayLarge">Tygiel</Text>
      <Text variant="headlineMedium">Plan lekcji</Text>
      <Button mode="contained" onPress={() => navigation.navigate(Screens.Sections, { type: SectionTypes.class })}>
        Klasy
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate(Screens.Sections, { type: SectionTypes.teacher })}>
        Nauczyciele
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate(Screens.Sections, { type: SectionTypes.classroom })}>
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