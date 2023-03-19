import { ReactElement, useEffect } from 'react';
import { View } from 'react-native';
import { StackNavigation } from '../../types/stackParamList';
import { Screens } from '../../types/screens.enum';
import { Button, Text } from 'react-native-paper';
import { useAppDispatch } from '../../hooks/useApp';
import { sectionsGetAll } from '../../services/sectionsService';
import { setSections } from '../../slices/sectionsSlice';
import { SectionTypes } from '../../types/sections.types';
import { homeScreenStyles } from '../../styles/HomeScreenStyles';

type HomeScreenProps = {
  navigation: StackNavigation,
}

const HomeScreen = (homeScreenProps: HomeScreenProps): ReactElement => {
  const { navigation } = homeScreenProps;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getSections = async () => {
      const sections = await sectionsGetAll();
      dispatch(setSections(sections));
    }
    getSections();
  }, []);

  return (
    <View style={homeScreenStyles.container}>
      <Text variant="displayLarge">Tygiel</Text>
      <Text variant="headlineMedium">Plan lekcji</Text>
      <div style={homeScreenStyles.buttonsContainer}>
        <Button mode="contained" style={homeScreenStyles.button} labelStyle={homeScreenStyles.buttonText} onPress={() => navigation.navigate(Screens.Sections, { type: SectionTypes.class })}>
          Klasy
        </Button>
        <Button mode="contained" style={homeScreenStyles.button} labelStyle={homeScreenStyles.buttonText} onPress={() => navigation.navigate(Screens.Sections, { type: SectionTypes.teacher })}>
          Nauczyciele
        </Button>
        <Button mode="contained" style={homeScreenStyles.button} labelStyle={homeScreenStyles.buttonText} onPress={() => navigation.navigate(Screens.Sections, { type: SectionTypes.classroom })}>
          Sale
        </Button>
      </div>
    </View>
  );
}

export default HomeScreen;